import {  useState, useContext } from "react"
import { cartContext } from '../Context/CartContext';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { db } from '../firebase/firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import Modal from '@mui/material/Modal';

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

  const { itemCartList, checkOut } = useContext (cartContext)
  const [OrderId, setOrderId] = useState(0)
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
    const orderCollection = collection(db, 'orders');
    addDoc(orderCollection, {
      buyer, 
      items: newList,
      date: serverTimestamp(),
      total: 400,
    })
    .then((result) => {
      setOrderId(result.id)
      console.log(newList)
    })
  }

  const handleChange = (prop) => (event) => {
       setBuyer({ ...buyer, [prop]: event.target.value });
    };     
    
    const handleClose = () => {
      setOpen(false);
      checkOut()
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
          <Box sx={{ ...style, width: 550, textAlign: "center" }}>
            <h2 id="titleModalForm">Complete con sus Datos</h2>

            <Box
              id="descriptModalForm"
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
                display: "flex",
                flexDirection: "column",
                margin: "0 auto",
              }}
              autoComplete="off"
            >
              <TextField
                id="outlined-multiliwne-flexible"
                label="Nombre"
                name="name"
                value={buyer.name}
                onChange={handleChange("name")}
                variant="standard"
                //   required='true'
                style={{ width: "55ch" }}
              />

              <TextField
                id="outlined-multiliwne-flexible"
                label="Teléfono"
                maxRows={1}
                value={buyer.phone}
                onChange={handleChange("phone")}
                variant="standard"
                helperText="..."
                //   required='true'
                style={{ width: "55ch" }}
              />

              <TextField
                id="outlined-multiliwne-flexible"
                label="Correo Electronico"
                maxRows={1}
                value={buyer.email}
                onChange={handleChange("email")}
                variant="standard"
                //   required='true'
                style={{ width: "55ch" }}
              />

              <Button
                onClick={sendOrder}
                sx={{ margin: " 20px 20px" }}
                variant="contained"
                style={{ backgroundColor: "#FF2C32" }}
              >
                Confirmar Compra
              </Button>

              {OrderId !== 0
                ? `Su orden se genero correctamente, su ID es ${OrderId}`
                : ""}
            </Box>
            <Button onClick={handleClose} sx={{ margin: '20px 20px', color: '#FF2C32' }}>Cerrar Ventana</Button>
          </Box>
        </Modal>
      </Box>
    </>
  );
  
}

export default UserForm