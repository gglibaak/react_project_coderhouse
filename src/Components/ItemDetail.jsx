import '../styles/ItemDetail.css'
import { Button } from '@mui/material';
import Divider from '@mui/material/Divider';
import ItemCount from './ItemCount'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box } from '@mui/system';
import Rating from '@mui/material/Rating';
import { useState, useContext } from 'react';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { cartContext } from '../Context/CartContext';
import ReplyIcon from '@mui/icons-material/Reply';

const ItemDetail = ( {item} ) => {
    const [value, setValue] = useState(3); 
    const [confirmBtn, setConfirmBtn] = useState(false);
    const { addItem } = useContext(cartContext);
    
    
    const onAdd = (itemCount) => {
        setConfirmBtn(true)
        // console.log(`Seleccion: ${itemCount}`)
        addItem(item, itemCount);
    }

    return (
      <div className="item__detail--container">
        <div className="item__detail--img">
          <img src={item.pictureUrl2} alt={item.title} />
        </div>
        <div className="item__detail--info">
          <p className="item__detail--pTitle">{item.title}</p>
          <p className="item__detail--pPrice">${item.price}</p>
          <Typography>Valoración</Typography>
          <Rating
            style={{ margin: "0 auto" }}
            name="stars"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <p className="item__detail--pDesc">{item.description}</p>
          <Divider variant="middle" sx={{ mb: 1 }} />
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Button
              style={{ color: "#00962d", margin: "0 50px", fontSize: "12px" }}
              startIcon={<LocalShippingIcon />}
              disabled
            >
              Envio sin cargo
            </Button>
            <Button
              style={{ color: "#FF2C32", margin: "0 50px", fontSize: "12px" }}
              startIcon={<FavoriteIcon />}
            >
              Añadir a Deseados.
            </Button>
          </Box>
          {!confirmBtn ? 
            <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
           : <>
            <Link to="/cart" style={{ textDecoration: "none" }}>
              <Button
                sx={{ width: { sm: "90%", md: "66%" }, margin: "15px 0 auto auto" }}
                variant="contained"
                style={{ backgroundColor: "#00962d" }}
              >
                Ir al carrito de compras
              </Button>
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                sx={{ width: { sm: "90%", md: "66%" }, margin: "15px auto" }}
                variant="contained"
                style={{ backgroundColor: "#FF2C32" }}
                startIcon={<ReplyIcon />}
              >
                Continuar Comprando
              </Button>
            </Link>
            </>
          }
        </div>
      </div>
    );
}

export default ItemDetail