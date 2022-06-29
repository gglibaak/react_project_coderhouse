import './App.css';
import Navbar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer'


function App() {
  return (
    <div className="App">
      <Navbar />         
      <ItemListContainer greeting="Lista de Productos" />
    </div>
  );
}

export default App;
