import logo from '../logo.svg';
import '../styles/NavBar.css'
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; //NO FUNCIONA

const NavBar = () => {
    return (
        <header>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>CoderInstruments Online</h1>
            
            <nav>
                <a href="#">Incio</a>
                <a href="#">Instrumentos</a>
                <a href="#">Ultimos Ingresos</a>
                <a href="#">Contacto</a> 
            </nav>
            
            <img className='logoCartFeo' src="https://www.seekpng.com/png/detail/932-9327293_shopping-cart.png" alt="" />  

        </header>
    )
}

export default NavBar