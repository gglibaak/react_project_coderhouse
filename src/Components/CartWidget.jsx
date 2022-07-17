import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; 
import Badge from '@mui/material/Badge';
import { useContext } from 'react';
import { context } from '../Context/CartContext';


const CartWidget = () => {
const { itemCartCount } = useContext(context)

    return (
        <>        
        <Badge color="error" badgeContent= {itemCartCount}>                
             <ShoppingCartIcon className='navBar__list--icon'> <span className='navBar__list--span'></span> </ShoppingCartIcon>{" "}
        </Badge>

        </>        
    )

}


export default CartWidget