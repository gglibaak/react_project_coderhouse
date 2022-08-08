import React from 'react'
import UserForm from './UserForm';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { cartContext } from '../Context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import ReplyIcon from '@mui/icons-material/Reply';
import Typography from '@mui/material/Typography';

const Checkout = () => {

const { clearList, checkOut, checkoutFinish, totalPrice } = useContext (cartContext)
 
  return (
    <>
    <h3>Checkout</h3>
    <Box      
     component={"div"}
     sx={{
       display: "flex",
       flexDirection: 'column'
     }}>
    <Typography component="div" variant="h5">TOTAL: <Typography component="span" variant="h5" style={{fontWeight: 'bold'}}>${totalPrice()}</Typography> </Typography>    
    <Button onClick={ clearList } variant="contained" style={{ backgroundColor: "#FF2C32" , margin: '20px auto'}} startIcon={<RemoveShoppingCartIcon />}>Vaciar Carrito</Button>  
    <Link to="/" style={{ textDecoration: "none" }}>
    <Button variant="contained" style={{ backgroundColor: "#FF2C32" , margin: '20px auto',}} startIcon={<ReplyIcon />}>Continuar Comprando</Button>       
    </Link>
    
    {checkoutFinish === false ?
    <Button onClick={() => checkOut(true)} variant="contained" style={{ backgroundColor: "black" , margin: '20px auto', fontSize: '16px' }}>Finalizar Compra</Button> 
     : <UserForm />}
   
    </Box>
    </>
  )
}

export default Checkout