import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          BVE
        </Link>
        <div className="nav-menu">
          <Link to="/features" className="nav-item">Features</Link>
          <Link to="/pricing" className="nav-item">Pricing</Link>
          <Link to="/support" className="nav-item">Support</Link>
        </div>
        <div className="nav-actions">
          <Link to="/login" className="nav-item">Login</Link>
          <Link to="/signup" className="btn btn-primary">Get Started</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
