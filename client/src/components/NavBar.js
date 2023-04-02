import React from "react";
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/testing'>Testing</NavLink>
        </div>
    )
}

export default NavBar;