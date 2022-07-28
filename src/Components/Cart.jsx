import { cartContext } from '../Context/CartContext';
import { useContext } from 'react';
import CartRender from './CartRender';
import Checkout from './Checkout';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';


const Cart = () => {

  const { itemCartCount } = useContext(cartContext);
  
  return (
    <>
    <h3>Cart</h3>
    { itemCartCount === 0
     ? <Typography component="div" variant="h6">El carrito de compras se encuentra vacio.<br></br> <Link style={{ textDecoration: 'none', color: 'red', textTransform: 'uppercase'}} to="/">
       <Button  variant="contained" style={{ backgroundColor: "#FF2C32" , margin: '20px auto'}} startIcon={<SearchIcon />}>Ver Productos</Button></Link> </Typography>
     : <CartRender /> }
     
     { itemCartCount === 0 ? '' : <Checkout /> }
    </>
  )
}

export default Cart

