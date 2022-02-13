import React from 'react';
import { Link } from "react-router-dom";

import './Navbar.scss';

const NavBar = () => {
    return (
        <div className="navbar">
            <Link className="navbar__link" to="/">Lista de Productos</Link>    
            <Link className="navbar__link" to="/product-register">Registrar Producto</Link>  
        </div>
    )
}

export default NavBar;