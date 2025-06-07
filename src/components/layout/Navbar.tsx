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
        <div className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <Link to="/features" className="nav-item" onClick={closeMobileMenu}>Features</Link>
          <Link to="/pricing" className="nav-item" onClick={closeMobileMenu}>Pricing</Link>
          <Link to="/support" className="nav-item" onClick={closeMobileMenu}>Support</Link>
          
          {/* Mobile-only actions */}
          <div className="nav-actions-mobile">
            <Link to="/login" className="btn btn-secondary" onClick={closeMobileMenu}>Login</Link>
            <Link to="/signup" className="btn btn-primary" onClick={closeMobileMenu}>Get Started</Link>
          </div>
        </div>
        <div className="nav-actions-desktop">
          <Link to="/login" className="nav-item">Login</Link>
          <Link to="/signup" className="btn btn-primary">Get Started</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
