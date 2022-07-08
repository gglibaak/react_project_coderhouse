import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail"
import Spinner from "react-spinners/ScaleLoader";
import { useParams } from 'react-router-dom';

// const detailArr = {
//     id:6,
//     title: `Fender Stratocaster "El Diablo" 1956`,
//     description: `Esta es una edición limitada de El Diablo Stratocaster en Aged Pink Paisley, cargada con un juego de pastillas de bobina simple "El Diablo". Las especificaciones también incluyen un cuerpo de alder con contornos profundos del 57, un perfil de mástil en "V" de 10/56 y trastes jumbo de juego rápido. Incluye: Estuche Rígido, Certificado de Autenticidad, Case Candy y Papeleo`,
//     price: 8500,
//     pictureUrl: "https://cdn.shopify.com/s/files/1/0916/0836/products/58972_Fender_Custom_Shop_S20_LTD_EL_DIABLO_STRAT_REL_APPSY_CZ560472_1_821x.progressive.jpg?v=1650613416"   
// }

const detailArr = [
  {
    id: 1,
    title: "Gibson Les Paul VOS 1958",
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

const detailPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(detailArr)
    }, 2000);
})

const ItemDetailContainer = () => {
  
  const [item, setItem] = useState([])
  const [loading, setLoading] = useState(true)
  const { itemId } = useParams();
  
    useEffect(() => {
      setLoading(true);
      detailPromise
        .then((res) => {         
          setItem(res.find(resultId => resultId.id === +itemId))           
        })
        .catch(() => console.error("Algo ha sucedido..."))
        .finally(() => {
          setLoading(false);
        });
    }, [itemId]);
    
    return (
        <>
         { !loading && <ItemDetail item={item}/>  }         
         { loading && <Spinner color="#FF2C32" size={8}/> }
        </>
    )
}

export default ItemDetailContainer