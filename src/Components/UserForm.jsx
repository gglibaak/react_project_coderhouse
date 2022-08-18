import {  useState, useContext } from "react"
import { cartContext } from '../Context/CartContext';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { db } from '../firebase/firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import Modal from '@mui/material/Modal';
import Spinner from "react-spinners/ScaleLoader";

const UserForm = ( ) => {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    bgcolor: 'background.paper',
    boxShadow: 'rgba(100, 100, 111, 0.2), 0px 7px 29px',
    pt: 2,
    px: 4,
    pb: 3,
  };

  const { itemCartList, checkOut, totalPrice, clearList } = useContext (cartContext)
  const [OrderId, setOrderId] = useState(0)
  const [isValidate, setIsValidate] = useState(true);
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(true);
  const [buyer, setBuyer] = useState({
      name: '',
      phone: '',
      email: ''
  });

  const newList = itemCartList.map(doc => {
    return {
      id: doc.item.id,
      title: doc.item.title,
      price: doc.item.price,      
    }
  })  
  
  const sendOrder = () => {
    setLoading(true)
    const orderCollection = collection(db, 'orders');
    addDoc(orderCollection, {
      buyer, 
      items: newList,
      date: serverTimestamp(),
      total: totalPrice(),
    })
    .then((result) => {
      setOrderId(result.id)      
    })
    .finally(() => setLoading(false));
  }

  const checkFormStatus = () => (!buyer.name || !buyer.phone || !buyer.email ) ? setIsValidate(false) :setIsValidate(true)  

  const handleChange = (prop) => (event) => {
       setBuyer({ ...buyer, [prop]: event.target.value });
       checkFormStatus()
    };     
    
    const handleClose = () => {
      setOpen(false);
      checkOut()
    };

    const checkOrderStatus = () => {
      if(OrderId !== 0) {
        clearList()
      }
    };
    
  return (
    <>   
      <Box
        sx={{
          display: open === false ? "none" : "fixed",
        }}
        style={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          background: "rgba(0,0,0,.5)",
          padding: "48px",
          zIndex: "20",
        }}
      >
        <Modal
          hideBackdrop
          open={open}
          onClose={handleClose}
          aria-labelledby="titleModalForm"
          aria-describedby="descriptModalForm"
        >
          <Box sx={{ ...style, width: {xs: '250px', md: '550px'}, textAlign: "center" }}>
            <h2 id="titleModalForm">Complete con sus Datos</h2>
            <h5 style={{color:'red'}}>{!isValidate ? 'Por favor complete todos los campos' : ''}</h5>
            <Box
              id="descriptModalForm"
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: {xs: "30ch", md: "55ch"} },
                display: "flex",
                flexDirection: "column",
                margin: "0 auto",
              }}
              autoComplete="off"
            >
              <TextField
                id="outlined-multiliwne-flexible"
                label="Nombre"
                type="text" 
                name="name"
                value={buyer.name}
                onChange={handleChange("name")}
                variant="standard"
                required='true'
                
              />

              <TextField
                id="outlined-multiliwne-flexible"
                label="Teléfono"
                type="number" 
                maxRows={1}
                value={buyer.phone}
                onChange={handleChange("phone")}
                variant="standard"                
                required='true'               
              />

              <TextField
                id="outlined-multiliwne-flexible"
                label="Correo Electronico"
                type="text" 
                maxRows={1}
                value={buyer.email}
                onChange={handleChange("email")}
                variant="standard"
                required='true'
              />

              <Button
                disabled={!isValidate}
                 onClick={sendOrder}                 
                 onFocus={checkFormStatus}
                 onBlur={checkFormStatus}
                sx={{ margin: "20px 0", width: '100%' }}
                variant="contained"
                style={{ backgroundColor: (isValidate) ?  "#FF2C32" :  "#dddddddd" }}
              >
                Confirmar Compra
              </Button>
              <Box sx={{ width: '100%', textAlign: "center" }}>
              { loading && <Spinner color="#FF2C32" size={8} /> }
              {OrderId !== 0
                ? `Su orden se genero correctamente, su ID es ${OrderId}`
                : ""}
              </Box>
              
              
            </Box>
            <Button onClick={() => {handleClose(); checkOrderStatus(); }} sx={{ margin: '20px 20px', color: '#FF2C32' }}>Cerrar Ventana</Button>
          </Box>
        </Modal>
      </Box>
    </>
  );
  
}

export default UserForm