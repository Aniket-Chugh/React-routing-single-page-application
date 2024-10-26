import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/home" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">About Us</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">Contact</Link>
        </li>

        <li className="nav-item">
          <Link to="/user/aniket" className="nav-link">User</Link>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;
