import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import Logo from './Logo'; // Import the Logo component
import '../CSS/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Logo /> {/* Add the Logo component */}
      </div>
      <nav className="navigation">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
