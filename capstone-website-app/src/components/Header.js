import React from "react";
import logo from '../assets/logo.svg';
import Nav from './Nav.js';

const Header = () => {
    return (
       <header className="header">
           <img src={logo} alt="Little Lemon Restaurant"></img>
           <Nav/>
       </header>
    );
};

export default Header;