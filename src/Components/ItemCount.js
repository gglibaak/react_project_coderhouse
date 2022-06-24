import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';


const ItemCount = ( {stock, initial = 1, onAdd} ) => {
    const [itemCount, setItemCount] = useState(initial);
    return (
        <>
        <h3>Stock disponible: { stock - itemCount } </h3>
        
            <div>
                <h2>{itemCount}</h2>
                <ButtonGroup>
                    <Button color='error' onClick={() => {
                        
                       itemCount > initial ? setItemCount(Math.max( itemCount - 1, 0 )) : console.warn(`Imposible disminuir menos que ${initial}`);

                        }}
                    >
                        {" "}
                        <RemoveIcon color='error' fontSize="small" />
                    </Button>
                    <Button color='error' onClick={() => {

                        itemCount >= stock ? alert("Stock Nulo") : setItemCount(itemCount + 1);                       

                        }}
                    >
                        {" "}
                        <AddIcon fontSize="small" color='error' />
                    </Button>
                </ButtonGroup>
            </div>
        </>
    )
}


export default ItemCount