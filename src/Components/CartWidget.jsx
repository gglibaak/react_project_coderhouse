import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; 
import Badge from '@mui/material/Badge';


const CartWidget = () => {
    return (
        <>

        <Badge color="error" badgeContent= {5}>                
             <ShoppingCartIcon className='navBar__list--icon'> <span className='navBar__list--span'>2</span> </ShoppingCartIcon>{" "}
        </Badge>

        </>        
    )

}


export default CartWidget