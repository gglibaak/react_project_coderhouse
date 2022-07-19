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

  const { itemCartList, removeItem, modifyItem } = useContext(cartContext);
  
 
  return (
    <>
    <h3>Cart</h3>   
    { itemCartList.map(itemCart => { return(
    <Box  key={itemCart.item.id} component={"div"} sx={{ display: 'flex',
     justifyContent: 'center',
     boxShadow: '10px 15px 10px 20px rgba(0, 0, 0, 0.008), 0 6px 6px rgba(0,0,0,0.13)',
     maxWidth: '80%',
     margin: '30px auto' }}>
    <CardMedia
        component="img"
        sx={{ width: 200, height: 200 }}
        image= { itemCart.item.pictureUrl2 }
        alt="Nombre del instrumento"        
      />
      <Box component={"div"} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', width: 400, height: 200}}>
      <Typography component="div" variant="h5">           
            { itemCart.item.title }
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            { itemCart.item.category }
          </Typography>
      
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: 300, height: 200, justifyContent: 'center'}}>
        <ButtonGroup sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
            <Button variant='text' onClick={() => {                
                             
            }}
            >
                {""}
                <RemoveIcon style={{color: "#FF2C32", fontSize: "15px"}} />
            </Button>
            <Box style={{margin: "0 30px" }}>
           { itemCart.quantity }
            </Box>
            <Button style={{}} variant='text'  onClick={() => {                                 

                }}
            >
                {""}
                <AddIcon  fontSize="small" style={{color: "#FF2C32", fontSize: "15px"}} />
            </Button>           
        </ButtonGroup>        
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: 150, height: 200, }}>
      <Typography component="div" variant="h5">
            { `$${itemCart.item.price * itemCart.quantity }` }
          </Typography>
        </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: 150, height: 200, }}>
      <Button style={{}} variant='text'  onClick={() => { removeItem(itemCart.item.id) }}
    >
    <DeleteIcon style={{color: "#FF2C32"}} />    
    </Button>           
        
      </Box>
    </Box> ) } )}
    
    </>
  )
}

export default Cart