import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../../styles/Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  
  const closeMobileMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          BVE
        </Link>
        <div className="menu-icon" onClick={handleToggle}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/features" className="nav-link" onClick={closeMobileMenu}>Features</Link>
          </li>
          <li className="nav-item">
            <Link to="/pricing" className="nav-link" onClick={closeMobileMenu}>Pricing</Link>
          </li>
          <li className="nav-item">
            <Link to="/support" className="nav-link" onClick={closeMobileMenu}>Support</Link>
          </li>
          <li className="nav-item-mobile">
            <Link to="/login" className="btn btn-secondary" onClick={closeMobileMenu}>Login</Link>
          </li>
          <li className="nav-item-mobile">
            <Link to="/signup" className="btn btn-primary" onClick={closeMobileMenu}>Get Started</Link>
          </li>
        </ul>
        <div className="nav-actions-desktop">
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/signup" className="btn btn-primary">Get Started</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
