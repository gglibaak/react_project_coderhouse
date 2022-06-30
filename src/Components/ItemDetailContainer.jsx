import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail"
import Spinner from "react-spinners/ScaleLoader";


const detailArr = {
    id:6,
    title: `Fender Stratocaster "El Diablo" 1956`,
    description: `Esta es una edición limitada de El Diablo Stratocaster en Aged Pink Paisley, cargada con un juego de pastillas de bobina simple "El Diablo". Las especificaciones también incluyen un cuerpo de alder con contornos profundos del 57, un perfil de mástil en "V" de 10/56 y trastes jumbo de juego rápido. Incluye: Estuche Rígido, Certificado de Autenticidad, Case Candy y Papeleo`,
    price: 8500,
    pictureUrl: "https://cdn.shopify.com/s/files/1/0916/0836/products/58972_Fender_Custom_Shop_S20_LTD_EL_DIABLO_STRAT_REL_APPSY_CZ560472_1_821x.progressive.jpg?v=1650613416"   
}

const detailPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(detailArr)
    }, 2000);
})

const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      setLoading(true);
      detailPromise
        .then((res) => {
          setItem(res);
        })
        .catch(() => console.error("Algo ha sucedido..."))
        .finally(() => {
          setLoading(false);
        });
    }, []);

    return (
        <>
         { !loading && <ItemDetail item={item}/>  }
         { loading && <Spinner color="#FF2C32" size={8}/> }
        </>
    )
}

export default ItemDetailContainer