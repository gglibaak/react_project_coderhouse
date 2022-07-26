import ItemList from './ItemList'
import { useEffect, useState } from 'react';
import Spinner from "react-spinners/ScaleLoader";
import { useParams } from 'react-router-dom';
import { db } from '../firebase/firebase'
import { getDocs, collection, query, where } from 'firebase/firestore'


const ItemListContainer = (props) => {

    const { categoryName } = useParams();
 
    const [instrumentList, setInstrumentList] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      
        setLoading(true);
        
        const pructFilter = categoryName
         ? query(collection(db, 'products'), where('category', '==', categoryName))
         : collection(db, 'products')

        getDocs(pructFilter)
        .then(res => {
          const lista = res.docs.map(doc => {
            return {
              id: doc.id,
              ...doc.data()
            }
          })          
          setInstrumentList(lista)
        })
        .catch(err => console.error(err))
        .finally(() => setLoading(false))        
        
    }, [categoryName]);
    
    return (<>
            <div>
                <h3>{props.greeting}</h3>
            </div>
            { loading && <Spinner color="#FF2C32" size={8}/> }
            <ItemList instruments={instrumentList} />           
    </>)
}


export default ItemListContainer