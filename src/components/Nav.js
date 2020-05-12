import React from 'react';
import './Nav.css';
import { NavLink, Redirect } from 'react-router-dom';


function Nav(props) {

    return (
        <nav className="nav">
            <div><NavLink to='/' activeStyle={{ color: 'white' }} exact>Home</NavLink></div>
            <ul className="nav-links">
                {
                    props.isLoggedIn.isLoggedIn ?
                        <NavLink to='/about' activeStyle={{ color: 'white' }} exact>About</NavLink> :
                        <Redirect to="/" />
                }
                {
                    props.isLoggedIn.isLoggedIn ?
                        <NavLink to='/gallery' activeStyle={{ color: 'white' }} exact>Gallery</NavLink> :
                        <Redirect to="/" />
                }
                {
                    props.isLoggedIn.isLoggedIn ?
                        <></> :
                        <NavLink to='/signup' activeStyle={{ color: 'white' }} exact>SignUp</NavLink>
                }
                <button className="login-button" onClick={props.handleLogin}>{props.isLoggedIn.isLoggedIn ? 'Logout' : 'Login'}</button>
                

            </ul>
        </nav>
    )
}

export default Nav