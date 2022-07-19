import { createContext, useState, useEffect } from "react"

export const cartContext = createContext();

const { Provider } = cartContext;


const CartContextProvider = ({ children }) => {
let [itemCartList, setItemCartList] = useState([])
let [itemCartCount,setItemCartCount] = useState(0)

useEffect(() => {
    console.log(itemCartList) 
    totalCartCount();
    // eslint-disable-next-line
  }, [itemCartList])

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

const removeItem = (itemId) => {
    setItemCartList(itemCartList.filter(product => product.item.id !== itemId))
    console.log("Flag: Removiendo... "+"ID:"+ itemId)
}

const clearList = () => {
    setItemCartList([]);
    console.log("Flag: Limpiando Lista...")
}

    return (
        <Provider value={ {itemCartList, addItem, removeItem, clearList, itemCartCount} }>
        { children}
        </Provider>
    )
}

export default CartContextProvider