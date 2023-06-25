import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.scss';
import logo from '../images/focuszone.png';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="image">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/Login" className="nav-link">Login</Link>
        </li>
        <button className="primary-btn">
          <Link to="/Signup" className="btn">Get Started</Link>
        </button>
      </ul>
    </nav>
  );
}