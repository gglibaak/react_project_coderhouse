import ItemCount from './ItemCount'
import ItemList from './ItemList'
import { useEffect, useState } from 'react';
import Spinner from "react-spinners/ScaleLoader";


 const instrumentArr = [
    {
        id:1,
        title: "Gibson Les Paul VOS 1958",
        description: "Gibson Custom Shop.",
        price: 6500,
        pictureUrl: "https://cdn.webshopapp.com/shops/179375/files/371136803/image.jpg",
        brand: "Gibson USA",
        category: "guitar"   
    },
    {
        id:2,
        title: "Gibson Les Paul Black Beuty 1998",
        description: "Gibson Custom Shop.",
        price: 3500,
        pictureUrl: "https://loviesguitars.com/wp-content/uploads/2020/03/IMG_5690.jpg",
        brand: "Gibson USA",
        category: "guitar"        
    },
    {
        id:3,
        title: "Gibson Firebird III 1965",
        description: "Gibson Custom Shop.",
        price: 3300,
        pictureUrl: "https://cdn.shopify.com/s/files/1/0081/3152/products/B13C2D93-5BAB-461F-98C7-AB511CC569BB_1980x.jpg",
        brand: "Gibson USA",
        category: "guitar"        
    },
    {
        id:4,
        title: "Fender Stratocaster CS 1969",
        description: "Fender Stratocaster.",
        price: 4300,
        pictureUrl: "https://blackdot.com.au/wp-content/uploads/2021/07/9235001458-1969-Fender-Strat-Custom-Shop-J-Relic-Vintage-White-APAC-June-21-1.jpg",
        brand: "Fender",
        category: "guitar"        
    },
    {
        id:5,
        title: `Fender Stratocaster "El Diablo" 1956`,
        description: "Fender Stratocaster.",
        price: 8500,
        pictureUrl: "https://blackdot.com.au/wp-content/uploads/2020/10/Fender-Strat-El-Diablo-Pink-Paisley-Custom-Shop-1.jpg",
        brand: "Fender",
        category: "guitar"        
    }, {
        id:6,
        title: "Fender Telecaster CS 1961",
        description: "Fender Telecaster.",
        price: 4500,
        pictureUrl: "https://pics.mercatinomusicale.com/p_hr/53/29/6452953_1579535788.jpg",
        brand: "Fender",
        category: "guitar"     
    }, {
        id:7,
        title: "Fender Jazz Bass 1969",
        description: "Fender Jazz Bass Vintae",
        price: 6800,
        pictureUrl: "https://www.talkbass.com/attachments/a6b0aac9-47b0-4a67-9dad-9abd6aa5d1e2-jpeg.3951273/",
        brand: "Fender",
        category: "bass-guitar"     
    }, {
        id:8,
        title: "Gibson Thunderbird IV",
        description: "Guitar Bass Reversed",
        price: 5600,
        pictureUrl: "https://i.pinimg.com/originals/03/bf/d6/03bfd6f14bf413173b8daa7315b50740.jpg",
        brand: "Gibson USA",
        category: "bass-guitar"     
    },
    , {
        id:9,
        title: "Gibson Dove 2002",
        description: "Acoustic",
        price: 5350,
        pictureUrl: "https://loviesguitars.com/wp-content/uploads/2022/03/1P4A3824.jpg",
        brand: "Gibson USA",
        category: "acoustic-guitar"     
    },
]

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(instrumentArr)
    }, 2000);
})


const ItemListContainer = (props) => {

    const [instrumentList, setInstrumentList] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        promise.then((res) => {        
        setInstrumentList(res);
      }).catch(() => console.error("Algo ha sucedido...")
      ).finally(() => {
        setLoading(false);
      })
    }, []);
    
    return (<>
            <div>
                <h3>{props.greeting}</h3>
            </div>
            { loading && <Spinner color="#FF2C32" size={8}/> }
            <ItemList instruments={instrumentList} />
            {/* <ItemCount stock={8} initial={1}  /> */}
    </>)
}


export default ItemListContainer