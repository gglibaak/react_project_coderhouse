import './App.css';
import Navbar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer'
import Footer from './Components/Footer';
import Cart from './Components/Cart'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import ItemDetailContainer from './Components/ItemDetailContainer'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />         
        <Routes>
         <Route path='/' element={<ItemListContainer greeting="Lista de Productos" />} />    
         <Route path="/category/:categoryName" element={<ItemListContainer greeting='Lista de Productos'/>}/>
         <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
         <Route path='/cart' element={<Cart />} />    
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
