import React from "react";
import { NavLink } from 'react-router-dom';
import Logo from '../assets/Logo.png';

function NavBar() {
    return (
        <div className="nav-bar">
            <NavLink to='/' id="center-logo"><img src={Logo} alt='Noteworthy Places Logo'/></NavLink>
            <NavLink to='/places/new' id="new-place-button">+ New Place</NavLink>
            <button id="nav-logout">Log Out</button>
        </div>
    )
}

export default NavBar;