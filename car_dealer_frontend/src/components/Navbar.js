import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/bk-motorspot-logo.png';


const Navbar = () => {
  return (
    <div>
    <nav className="navbar">

      <ul>
      <li>
      <div className="navbar-logo">
        <img src={logo} alt="bk motorsport" />
      </div>
      </li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cars">Car List</Link></li>
      </ul>
      
    </nav>
    <hr></hr>
    </div>
  );
};

export default Navbar;
