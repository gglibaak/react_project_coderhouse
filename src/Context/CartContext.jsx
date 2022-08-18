import { createContext, useState, useEffect } from "react"

export const cartContext = createContext();

const { Provider } = cartContext;


const CartContextProvider = ({ children }) => {
let [itemCartList, setItemCartList] = useState([])
let [itemCartCount,setItemCartCount] = useState(0)
let [checkoutFinish, setCheckoutFinish] = useState(false)

useEffect(() => {    
    totalCartCount();    
    // eslint-disable-next-line
  }, [itemCartList])


const checkOut = () => checkoutFinish === false ? setCheckoutFinish(true) : setCheckoutFinish(false);


const addItem = (item, quantity) => {

    const index = itemCartList.findIndex((i) => i.item.id === item.id);

    if (index > -1) {
        const newList = [...itemCartList];
        newList[index].quantity += quantity;
        setItemCartList(newList);        
    }
    else {
        setItemCartList([...itemCartList, { item, quantity: quantity }]);  
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
    if (itemCartList[itemMdfy].item.stock > (itemCartList[itemMdfy].quantity + 1)) {
      const newList = [...itemCartList];
      newList[itemMdfy].quantity += 1;
      setItemCartList(newList);
    }
      break;
    case 2: //Subtraction
      if (itemCartList[itemMdfy].quantity > 1) {
        const newList = [...itemCartList];
        newList[itemMdfy].quantity--;
        setItemCartList(newList);
      }
      break;
    default:
      break;
  }
};
const totalPrice = () => itemCartList.reduce((acum, i) => acum + i.quantity * i.item.price, 0);
  
const removeItem = (itemId) => setItemCartList(itemCartList.filter(product => product.item.id !== itemId)) 

const clearList = () => setItemCartList([]);
    

    return (
        <Provider value={ {itemCartList, addItem, removeItem, clearList, itemCartCount , modifyItem, checkOut, checkoutFinish, totalPrice} }>
        { children}
        </Provider>
    )
}

export default CartContextProvider