import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';


const ItemCount = ( {stock, initial} ) => {
    const [itemCount, setItemCount] = useState(1);
    return (
        <>
        <h3>Stock disponible: { stock - itemCount } </h3>
        
            <div>
                <h2>{itemCount}</h2>
                <ButtonGroup>
                    <Button
                        onClick={() => {
                        setItemCount(Math.max( itemCount - 1, 0 ));
                        }}
                    >
                        {" "}
                        <RemoveIcon fontSize="small" />
                    </Button>
                    <Button
                        onClick={() => {

                        itemCount >= stock ? alert("Stock Nulo") : setItemCount(itemCount + 1);

                        }}
                    >
                        {" "}
                        <AddIcon fontSize="small" />
                    </Button>
                </ButtonGroup>
            </div>
        </>
    )
}


export default ItemCount