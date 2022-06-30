import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';
import { Box } from '@mui/system';


const ItemCount = ( {stock, initial, onAdd} ) => {
    const [itemCount, setItemCount] = useState(1);
    return (
        <>                
            <div>                
                <ButtonGroup>
                    <Button variant='text' onClick={() => {
                        
                       itemCount > initial ? setItemCount(Math.max( itemCount - 1, 0 )) : console.warn(`Imposible disminuir menos que ${initial}`)
                    }}
                    >
                        {""}
                        <RemoveIcon style={{color: "#FF2C32", fontSize: "15px"}} />
                    </Button>
                    <Box style={{margin: "0 30px" }}>
                    <h3>{itemCount}</h3>
                    </Box>
                    <Button style={{}} variant='text'  onClick={() => {

                        itemCount >= stock ? alert("Stock Nulo") : setItemCount(itemCount + 1);                       

                        }}
                    >
                        {""}
                        <AddIcon  fontSize="small" style={{color: "#FF2C32", fontSize: "15px"}} />
                    </Button>
                </ButtonGroup>
                <p>Stock disponible: { stock - itemCount } </p>
            </div>
        </>
    )
}


export default ItemCount