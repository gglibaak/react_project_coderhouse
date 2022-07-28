import { createContext, useState, useEffect } from "react"

export const cartContext = createContext();

const { Provider } = cartContext;


const CartContextProvider = ({ children }) => {
let [itemCartList, setItemCartList] = useState([])
let [itemCartCount,setItemCartCount] = useState(0)
let [checkoutFinish, setCheckoutFinish] = useState(false)

useEffect(() => {
    console.log(itemCartList) 
    totalCartCount();
    checkOut();
    // eslint-disable-next-line
  }, [itemCartList])


const checkOut = () => checkoutFinish === false ? setCheckoutFinish(true) : setCheckoutFinish(false);

//console.log(checkoutFinish) /*FLAG BORRAR*/

const addItem = (item, quantity) => {

    const index = itemCartList.findIndex((i) => i.item.id === item.id);

    if (index > -1) {

        const newList = [...itemCartList];
        newList[index].quantity += quantity;
        setItemCartList(newList);
        console.log("Flag: Es igual y suma")
    }
    else {
        setItemCartList([...itemCartList, { item, quantity: quantity }]);
        console.log("Flag: Suma nuevo item a lista")
    }    
}

const totalCartCount = () => {
    let itemCartCount = 0;
    itemCartList.forEach(itemCart => {
        itemCartCount += itemCart.quantity;
        
    })
    setItemCartCount(itemCartCount)
}

const modifyItem = (type, itemId) => {
  const itemMdfy = itemCartList.findIndex((i) => i.item.id === itemId);

  switch (type) {
    case 1: //Addition
      const newList = [...itemCartList];
      newList[itemMdfy].quantity += 1;
      setItemCartList(newList);
      console.log("Flag: Es igual y SUMA");
      break;
    case 2: //Subtraction
      if (itemCartList[itemMdfy].quantity > 1) {
        const newList = [...itemCartList];
        newList[itemMdfy].quantity--;
        setItemCartList(newList);
        console.log("Flag: Es igual y RESTA");
      } else console.log("FLAG: Es igual, NO PUEDE SER MENOR QUE 1");
      break;
    default:
      break;
  }
}

const removeItem = (itemId) => {
    setItemCartList(itemCartList.filter(product => product.item.id !== itemId))
    console.log("Flag: Removiendo... "+ itemId)
}

const clearList = () => {
    setItemCartList([]);
    console.log("Flag: Limpiando Lista...")
}

    return (
        <Provider value={ {itemCartList, addItem, removeItem, clearList, itemCartCount , modifyItem, checkOut, checkoutFinish} }>
        { children}
        </Provider>
    )
}

export default CartContextProvider