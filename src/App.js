import './App.css';
import Navbar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />         
      <ItemListContainer greeting="Lista de Productos" />
      <ItemDetailContainer />
      <Footer />
    </div>
  );
}

export default App;
