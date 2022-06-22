import logo from '../logo.png';
import '../styles/NavBar.css'
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; 
import { Button} from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import CartWidget from './CartWidget'



const NavBar = () => {
    return (
        <header>
            <a href="#"><img src={logo} className="App-logo" alt="logo" />  </a>                                 
            <nav className='navBar__list'>
                <a className='navBar__list--item btn-selected' href="#">Inicio</a>
                <a className='navBar__list--item' href="#">Instrumentos</a>
                <a className='navBar__list--item' href="#">Ultimos Ingresos</a>
                <a className='navBar__list--item' href="#">Contacto</a> 
            </nav>            
            <CartWidget />
            <Button variant="contained" style={{backgroundColor: "#FF2C32"}} startIcon={<LockOpenIcon />}>Iniciar Sesión</Button>
        </header>
    )
}

export default NavBar