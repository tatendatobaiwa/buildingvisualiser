import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';
// Placeholder for an icon, you can use an SVG or a library like react-icons
const FeatureIcon = () => <span>&#10003;</span>; 

const HomePage: React.FC = () => {
  return (
    <div className="homepage-container">
      {/* Hero Section */}
      <header className="home-hero">
        <div className="hero-content">
          <h1 className="hero-title">2D and 3D CAD software</h1>
          <p className="hero-subtitle">
            Unlock your potential with AutoCAD. See how our features can boost your creativity and productivity.
          </p>
          <Link to="/signup" className="btn btn-primary btn-large">
            Download free trial
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="home-features">
        <h2 className="section-title">Why Choose BVE?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <FeatureIcon />
            <h3>Draft, annotate and design</h3>
            <p>Create precise 2D and 3D drawings.</p>
          </div>
          <div className="feature-item">
            <FeatureIcon />
            <h3>Collaborate across platforms</h3>
            <p>Share and annotate drawings with speed and security.</p>
          </div>
          <div className="feature-item">
            <FeatureIcon />
            <h3>Ensure fidelity and compatibility</h3>
            <p>Preserve fidelity and ensure compatibility with TrustedDWG technology.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="home-cta">
        <h2 className="section-title">Ready to get started?</h2>
        <p>Explore the possibilities with a powerful and intuitive CAD tool.</p>
        <Link to="/signup" className="btn btn-primary btn-large">
          Sign Up Now
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
