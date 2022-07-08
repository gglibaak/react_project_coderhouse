import ItemList from './ItemList'
import { useEffect, useState } from 'react';
import Spinner from "react-spinners/ScaleLoader";
import { useParams } from 'react-router-dom';



const instrumentArr = [
  {
    id: 1,
    title: "Gibson Les Paul VOS 1958",
    shortDescription: "Gibson Les Paul Historic",
    description: "Gibson Custom Shop.",
    price: 6500,
    pictureUrl:
      "https://i.postimg.cc/4y2Wy22n/1.jpg",      
    pictureUrl2:
      "https://i.postimg.cc/SNvybydb/1.jpg",    
    brand: "Gibson USA",
    category: "electric-guitar",
    stock:2,
  },
  {
    id: 2,
    title: "Gibson Les Paul Black Beuty 1998",
    shortDescription: "Gibson Les Paul Historic",
    description: "Gibson Custom Shop.",
    price: 3500,
    pictureUrl:
      "https://i.postimg.cc/SRPGk2jM/2.jpg",      
      pictureUrl2:
        "https://i.postimg.cc/0QPv0rkD/2.jpg", 
    brand: "Gibson USA",
    category: "electric-guitar",
    stock:4,
  },
  {
    id: 3,
    title: "Gibson Firebird III 1965",
    shortDescription: "Gibson Firebird Old Vintage Store",
    description: "Gibson Custom Shop.",
    price: 3300,
    pictureUrl:
      "https://i.postimg.cc/qvyGH7rN/3.jpg",      
      pictureUrl2:
        "https://i.postimg.cc/1zxs4JbW/3.jpg",     
    brand: "Gibson USA",
    category: "electric-guitar",
    stock:1,
  },
  {
    id: 4,
    title: "Fender Stratocaster CS 1969",
    shortDescription: "Fender Stratocaster Custom Shop",
    description: "Fender Stratocaster.",
    price: 4300,
    pictureUrl:
      "https://i.postimg.cc/WbK9PKJH/4.jpg",      
      pictureUrl2:
        "https://i.postimg.cc/0yK98LXM/4.jpg", 
    brand: "Fender",
    category: "electric-guitar",
    stock:6,
  },
  {
    id: 5,
    title: `Fender Stratocaster "El Diablo" 1956`,
    shortDescription: "Fender Stratocaster Custom Shop",
    description:  `Esta es una edición limitada de El Diablo Stratocaster en Aged Pink Paisley, cargada con un juego de pastillas de bobina simple "El Diablo". Las especificaciones también incluyen un cuerpo de alder con contornos profundos del 57, un perfil de mástil en "V" de 10/56 y trastes jumbo de juego rápido. Incluye: Estuche Rígido, Certificado de Autenticidad, Case Candy y Papeleo.`,
    price: 8500,
    pictureUrl:
      "https://i.postimg.cc/ydVjPCwk/5.jpg",
    pictureUrl2:
     "https://i.postimg.cc/PqmhD1jd/5.jpg" ,
    brand: "Fender",
    category: "electric-guitar",
    stock:15,
  },
  {
    id: 6,
    title: "Fender Telecaster CS 1961",
    shortDescription: "Fender Telecaster Custom Shop",
    description: "Fender Telecaster.",
    price: 4500,
    pictureUrl:
      "https://i.postimg.cc/VvvFxBsw/6.jpg",      
      pictureUrl2:
        "https://i.postimg.cc/DZ6TjF0D/6.jpg", 
    brand: "Fender",
    category: "electric-guitar",
    stock:3,
  },
  {
    id: 7,
    title: "Fender Jazz Bass 1969",
    shortDescription: "Fender Jazz Bass Custom Shop",
    description: "Fender Jazz Bass Vintae",
    price: 6800,
    pictureUrl:
      "https://i.postimg.cc/ncskTkwY/7.jpg",      
      pictureUrl2:
        "https://i.postimg.cc/brFjPTQ9/7.jpg",     
    brand: "Fender",
    category: "bass-guitar",
    stock:20,
  },
  {
    id: 8,
    title: "Gibson Thunderbird IV",
    shortDescription: "Gibson Guitar Bass Custom Shop",
    description: "Guitar Bass Reversed",
    price: 5600,
    pictureUrl:
      "https://i.postimg.cc/P5wSf4Wr/8.jpg",     
      pictureUrl2:
        "https://i.postimg.cc/QCMrvPWM/8.jpg",     
    brand: "Gibson USA",
    category: "bass-guitar",
    stock:11,
  },
  {
    id: 9,
    title: "Gibson Dove 2002",
    shortDescription: "Gibson Guitar Acoustic Custom",
    description: "Acoustic",
    price: 5350,
    pictureUrl:
      "https://i.postimg.cc/nz0kSwJT/9.jpg",      
      pictureUrl2:
        "https://i.postimg.cc/NGNtRgW2/9.jpg",    
    brand: "Gibson USA",
    category: "acoustic-guitar",
    stock:5,
  },
];

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(instrumentArr)
    }, 2000);
})


const ItemListContainer = (props) => {

    const { categoryName } = useParams();
 
    const [instrumentList, setInstrumentList] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        promise.then((res) => {   
        setInstrumentList(!categoryName
           ? res 
           : (res.filter((instrumentResult) => instrumentResult.category === categoryName)));
      }).catch(() => console.error("Algo ha sucedido...")
      ).finally(() => {
        setLoading(false);
      })
    }, [categoryName]);
    
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