import logo from '../logo.svg';
import '../styles/NavBar.css'
import { Button } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import CartWidget from './CartWidget'
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';

const NavBar = () => {
    return (
       
        <header>
            <a href="#!"><img src={logo} className="App-logo" alt="logo" />  </a>  
            <Box sx={{ display: { xs: 'none', md: 'block', sm: 'none' } }}>                               
                <nav className='navBar__list'>
                    <a className='navBar__list--item btn-selected' href="#!">Inicio</a>
                    <a className='navBar__list--item' href="#!">Instrumentos</a>
                    <a className='navBar__list--item' href="#!">Ultimos Ingresos</a>
                    <a className='navBar__list--item' href="#!">Contacto</a>            
                </nav> 
            </Box>           
            <CartWidget />
            <Button color='error'sx={{ display: { md: 'none', sm: 'none', xs: 'block' } }}>
                <MenuIcon ></MenuIcon>
            </Button>
            <Button sx={{ display: { xs: 'none', md: 'flex', sm: 'none' } }} variant="contained" style={{backgroundColor: "#FF2C32"}} startIcon={<LockOpenIcon />}>Iniciar Sesión</Button>
        </header>
       
    )
}

export default NavBar