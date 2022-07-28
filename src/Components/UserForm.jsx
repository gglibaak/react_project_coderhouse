import {  useState, useContext } from "react"
import { cartContext } from '../Context/CartContext';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { db } from '../firebase/firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

const UserForm = () => {
  const { itemCartList } = useContext (cartContext)
  const [OrderId, setOrderId] = useState(0)
  const [value, setValue] = useState({
      name: '',
      phone: '',
      email: ''
  });
  
  const sendOrder = () => {
    const orderCollection = collection(db, 'orders');
    addDoc(orderCollection, {
      value, 
      items: itemCartList,
      date: serverTimestamp(),
      total: 400,
    })
    .then((result) => {
      setOrderId(result.id)
    })
  }

  

  console.log(value);
  console.log(OrderId);
  // const handleSubmit = () => {
    
   
  // }
  
  const handleChange = (prop) => (event) => {
      setValue({ ...value, [prop]: event.target.value });
    };

  return (
    <>
     <h3>UserForm</h3>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        display: "flex",
        flexDirection: 'column',
        margin: '0 auto'
        
      }}
      
      
      autoComplete="off"
    >
      
        <TextField
          id="outlined-multiliwne-flexible"
          label="Nombre"
          
          name='name'
          value={value.name}
          onChange={handleChange('name')}
          variant="standard"
        //   required='true'
          style= {{width: '55ch'}}
        />
        
        <TextField
          id="outlined-multiliwne-flexible"
          label="Teléfono"
          
          maxRows={1}
          value={value.phone}
          onChange={handleChange('phone')}
          variant="standard"
          helperText="..."
        //   required='true'
          style= {{width: '55ch'}}
        />

        <TextField
          id="outlined-multiliwne-flexible"
          label="Correo Electronico"

          maxRows={1}
          value={value.email}
          onChange={handleChange('email')}
          variant="standard"
        //   required='true'     
          style= {{width: '55ch'}}     
        />
        <Button onClick={sendOrder}>Submit</Button>      

        { OrderId !== 0 ? 
        `Su orden se genero correctamente, su ID es ${OrderId}`
      : ''}    
    </Box>
    </>
  )
  
}

export default UserForm