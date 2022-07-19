import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { cartContext } from '../Context/CartContext';
import { useContext } from 'react';

const Cart = () => {

  const { itemCartList } = useContext(cartContext);

  if (itemCartList.lenght !== 0) console.warn(itemCartList)
  return (
    <>
    <h3>Cart</h3>
    { itemCartList.map(i => <h1 key={i.id}>{i.title}</h1>) }    
    
    </>
  )
}

export default Cart