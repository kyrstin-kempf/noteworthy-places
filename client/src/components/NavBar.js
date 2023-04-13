import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from 'react-router-dom';
import newlogo from '../assets/newlogo.png';

function NavBar() {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    function handleLogout() {
        fetch('/logout', {
            method: 'DELETE',
        }).then((r) => {
            if (r.ok) {
                dispatch({ type: "user/userLoggedOut" })
                navigate('/')
            }
        });
    }

    return (
        <div className="nav-bar">
            <NavLink to='/' id="center-logo"><img src={newlogo} alt='Noteworthy Places Logo'/></NavLink>
            <NavLink to='/places/new' id="new-place-button">+ New Place</NavLink>
            <button onClick={handleLogout} id="nav-logout">Log Out</button>
        </div>
    )
}

export default NavBar;