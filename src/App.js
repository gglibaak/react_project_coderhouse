import './App.css';
import Navbar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer'


function App() {
  return (
    <div className="App">
      <Navbar />         
      <ItemListContainer greeting="Acá va la data" />
    </div>
  );
}

export default App;
