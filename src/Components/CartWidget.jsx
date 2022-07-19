import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; 
import Badge from '@mui/material/Badge';
import { useContext } from 'react';
import { cartContext } from '../Context/CartContext';


const CartWidget = () => {
const { itemCartCount } = useContext(cartContext)

    return (
        <>        
        <Badge color="error" badgeContent= {itemCartCount}>                
             <ShoppingCartIcon className='navBar__list--icon'> <span className='navBar__list--span'></span> </ShoppingCartIcon>{" "}
        </Badge>

        </>        
    )

}


export default CartWidget