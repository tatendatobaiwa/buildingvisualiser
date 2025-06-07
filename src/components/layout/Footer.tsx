import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/about">How it works</Link>
            <Link to="/testimonials">Testimonials</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/investors">Investors</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/contact">Contact</Link>
            <Link to="/support">Support</Link>
            <Link to="/destinations">Destinations</Link>
            <Link to="/sponsorships">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join our newsletter to receive the latest news and trends
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <button className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </section>
      <div className="footer-bottom">
        <small className="website-rights">BVE © {new Date().getFullYear()}</small>
      </div>
    </footer>
  );
};

export default Footer;
