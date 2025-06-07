import React from 'react';
import { Link } from 'react-router-dom';
import { DraftingCompass, Users, ShieldCheck, SquarePen, MonitorSmartphone, Scaling } from 'lucide-react';
import '../styles/HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="homepage-container">
      {/* Hero Section */}
      <header className="home-hero">
        <div className="hero-content">
          <h1 className="hero-title">Precision Engineering, Simplified.</h1>
          <p className="hero-subtitle">
            The all-in-one platform to design, visualize, and estimate your construction projects with unparalleled accuracy. Built for the modern professional.
          </p>
          <Link to="/signup" className="btn btn-primary btn-large">
            Start Your Free Trial
          </Link>
        </div>
      </header>

      {/* Product Preview Section */}
      <section className="product-preview-section">
          <h2 className="section-title">See BVE in Action</h2>
          <div className="product-image-container">
            {/* Replace with an actual screenshot or video */}
            <img src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2072&auto=format&fit=crop" alt="Product preview" className="product-image" />
          </div>
      </section>

      {/* Features Section */}
      <section className="home-features">
        <h2 className="section-title">Why Choose BVE?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <DraftingCompass size={48} className="feature-icon" />
            <h3>Draft, Annotate & Design</h3>
            <p>Create precise 2D and 3D drawings with our powerful and intuitive toolset.</p>
          </div>
          <div className="feature-item">
            <Users size={48} className="feature-icon" />
            <h3>Collaborate Across Platforms</h3>
            <p>Share and annotate drawings with speed and security, from desktop to mobile.</p>
          </div>
          <div className="feature-item">
            <ShieldCheck size={48} className="feature-icon" />
            <h3>Ensure Fidelity & Compatibility</h3>
            <p>Preserve fidelity and ensure compatibility with industry-standard file formats.</p>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="how-it-works-section">
        <h2 className="section-title">Get Started in 3 Easy Steps</h2>
        <div className="steps-container">
            <div className="step">
                <div className="step-icon-wrapper"><SquarePen size={32} /></div>
                <h3>1. Design</h3>
                <p>Bring your vision to life with our comprehensive suite of design tools.</p>
            </div>
            <div className="step-arrow">&rarr;</div>
            <div className="step">
                <div className="step-icon-wrapper"><MonitorSmartphone size={32} /></div>
                <h3>2. Visualize</h3>
                <p>Render your designs in stunning 3D to get a realistic view of your project.</p>
            </div>
            <div className="step-arrow">&rarr;</div>
            <div className="step">
                <div className="step-icon-wrapper"><Scaling size={32} /></div>
                <h3>3. Estimate</h3>
                <p>Generate accurate cost and material estimates instantly from your designs.</p>
            </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2 className="section-title">Trusted by Professionals</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p className="testimonial-text">"BVE has revolutionized our workflow. The ability to design and estimate in one place has saved us countless hours."</p>
            <p className="testimonial-author">- Alex Johnson, Lead Architect</p>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">"The most intuitive and powerful CAD software I've used. The 3D visualization is a game-changer."</p>
            <p className="testimonial-author">- Sarah Lee, Structural Engineer</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="home-cta">
        <h2 className="section-title">Ready to build the future?</h2>
        <p>Explore the possibilities with a powerful and intuitive CAD tool.</p>
        <Link to="/signup" className="btn btn-primary btn-large">
          Sign Up Now
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
