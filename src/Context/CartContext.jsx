import { createContext, useState } from "react"

export const context = createContext();

const { Provider } = context;


const CartContextProvider = ({ children }) => {
const [itemCartList, setItemCartList] = useState([])

const addItem = (item, quantity) => {
    console.log(`Añadiste ${quantity} ${item}`)
    setItemCartList([...itemCartList, {item, quantity}])
    console.log(itemCartList)
}

const removeItem = (itemId) => {
    console.log("Removiendo...")
}

const clearList = () => {
    // setItemCartList = ([]);
    console.log("Limpiando Lista...")
}

    return (
        <Provider value={ {itemCartList, addItem, removeItem, clearList}}>
        { children}
        </Provider>
    )
}

export default CartContextProvider