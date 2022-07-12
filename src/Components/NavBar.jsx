import logo from '../logo.svg';
import '../styles/NavBar.css'
import { Button } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import CartWidget from './CartWidget'
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {

    const categories = [
        { name: "Todos los instrumentos", id: 0, route: "/" },
        { name: "Guitarras Electricas", id: 1, route: "/category/electric-guitar" },
        { name: "Bajos Electricos", id: 2, route: "/category/bass-guitar" },
        { name: "Guitarras Acústicas", id: 3, route: "/category/acoustic-guitar" },
    ];

    return (
       
        <header>
            <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>  
            <Box component="nav" sx={{ display: { xs: 'none', md: 'block', sm: 'none' } }}>                               
                <div className='navBar__list'>                   
                    { categories.map((category) => <NavLink key={ category.id } className='navBar__list--item' to={ category.route }>{ category.name }</NavLink> ) }
                </div> 
            </Box>
            <Link to="/cart">
                <CartWidget />
            </Link>
            <Button color='error'sx={{ display: { md: 'none', sm: 'none', xs: 'block' } }}>
                <MenuIcon ></MenuIcon>
            </Button>
            <Button sx={{ display: { xs: 'none', md: 'flex', sm: 'none' } }} variant="contained" style={{ backgroundColor: "#FF2C32" }} startIcon={<LockOpenIcon />}>Iniciar Sesión</Button>
        </header>
       
    )
}

export default NavBar