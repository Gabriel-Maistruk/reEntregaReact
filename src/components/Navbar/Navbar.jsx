import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import TotalItems from "../CartContent/TotalItems";

import "./Navbar.css";

const Navbar = () => {
    
    const { cart } = useContext(CartContext);
return (
    <div className='nav-container'>
        <nav className='navbar'>
            <Link to={"/"}>
            <h1 className='navbar-logo'>
                <img src="https://www.monsterenergy.com/img/home/monster-logo.png" alt="logo-monster" />
            </h1>
            </Link>
            <Link className='seeCarrito' to={'/cart'}>
            <ShoppingCartIcon sx={{fontSize: "35px"}}/>
                {cart.length > 0 ? <TotalItems /> : null }
            </Link>
        </nav>
    </div>
)
}

export default Navbar;
