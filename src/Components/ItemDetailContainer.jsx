import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail"
import Spinner from "react-spinners/ScaleLoader";
import { useParams } from 'react-router-dom';
import { db } from '../firebase/firebase'
import { getDoc, doc,  } from 'firebase/firestore'

const ItemDetailContainer = () => {
  
  const [item, setItem] = useState([])
  const [loading, setLoading] = useState(true)
  const { itemId } = useParams();
  
    useEffect(() => {
      setLoading(true);
      const docRef = doc(db, "products", itemId);
      getDoc(docRef)
        .then((doc) => {
          setItem({ id: doc.id, ...doc.data() });
        })
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }, [itemId]);
    
    return (
        <>
         { !loading && <ItemDetail item={item}/>  }         
         { loading && <Spinner color="#FF2C32" size={8}/> }
        </>
    )
}

export default ItemDetailContainer