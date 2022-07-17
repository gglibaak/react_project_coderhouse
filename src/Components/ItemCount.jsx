import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useState } from 'react';
import { Box } from '@mui/system';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ItemCount = ( {stock, initial, onAdd} ) => {
    const [itemCount, setItemCount] = useState(1);

    const addItemToCart = () => {
        notify(2)
        setTimeout(() => {
            onAdd(itemCount)
        }, 3000);
        
    }

    const notify = (i) => {
        switch (i) {
          case 1: //alert
            toast.warn(`Imposible disminuir menos que ${initial}`, {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            break;
          case 2: //success
            toast.success(`Se ha agregado ${itemCount} a tu carrito.`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });           
            break;
          case 3: //error
            toast.error(`Stock nulo, no se puede añadir mas items.`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",               
            });
            break;
            default:
                break;
        }
        
    }

    return (
        <>                
            <div>                
                <ButtonGroup>
                    <Button variant='text' onClick={() => {
                        
                       itemCount > initial ? setItemCount(Math.max( itemCount - 1, 0 )) : notify(1);                    
                    }}
                    >
                        {""}
                        <RemoveIcon style={{color: "#FF2C32", fontSize: "15px"}} />
                    </Button>
                    <Box style={{margin: "0 30px" }}>
                    <h3>{itemCount}</h3>
                    </Box>
                    <Button style={{}} variant='text'  onClick={() => {

                        itemCount >= stock ? notify(3) : setItemCount(itemCount + 1);                       

                        }}
                    >
                        {""}
                        <AddIcon  fontSize="small" style={{color: "#FF2C32", fontSize: "15px"}} />
                    </Button>
                </ButtonGroup>
                <p>Stock disponible: { stock - itemCount }</p>
                <ToastContainer />
                <Button onClick={addItemToCart} sx={{width: { sm: '90%' , md: '66%' }, margin: "0 auto",}} variant="contained" style={{backgroundColor: "#FF2C32"}} startIcon={<AddShoppingCartIcon />}>Añadir al Carro</Button>   
            </div>
        </>
    )
}


export default ItemCount