import React from 'react';
import '../../pages.css';

function ArtistCoordination() {
  return (
    <div className="service-page">
      <div className="service-hero">
        <h1>Artist Coordination</h1>
        <span className="service-highlight">Artist Management & Coordination Services</span>
        <p className="service-intro">
          Comprehensive artist coordination services to manage schedules, logistics, and ensure smooth production workflows.
        </p>
      </div>

      <div className="service-content">
        <div className="service-features">
          <h2>Coordination Services</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📅</div>
              <h3>Schedule Management</h3>
              <p>Efficient scheduling and timeline coordination for all project stakeholders. We ensure every aspect of your production runs smoothly and on time with detailed planning.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Artist Relations</h3>
              <p>Professional artist liaison and communication management. Our coordinators are skilled at managing artist needs while maintaining productive working relationships.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📋</div>
              <h3>Production Logistics</h3>
              <p>Complete logistics coordination from pre-production to wrap. Handle everything from equipment transport to catering arrangements with our comprehensive logistical support.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💼</div>
              <h3>Contract Management</h3>
              <p>Artist contracts, releases, and legal documentation handling. Navigate the complex world of entertainment law with our experienced contract management specialists.</p>
            </div>
          </div>
        </div>

        <div className="service-pricing">
          <h2>Service Packages</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Basic Coordination</h3>
              <div className="price">$500/day</div>
              <ul>
                <li>Schedule coordination</li>
                <li>Basic artist liaison</li>
                <li>Production support</li>
              </ul>
            </div>
            <div className="pricing-card featured">
              <h3>Full Management</h3>
              <div className="price">$1,200/day</div>
              <ul>
                <li>Complete artist management</li>
                <li>Contract handling</li>
                <li>Logistics coordination</li>
                <li>24/7 support</li>
              </ul>
            </div>
            <div className="pricing-card">
              <h3>Project Management</h3>
              <div className="price">Custom</div>
              <ul>
                <li>Multi-artist coordination</li>
                <li>Extended project support</li>
                <li>Dedicated coordinator</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="service-cta">
          <h2>Need Artist Coordination?</h2>
          <p>Let us handle the logistics while you focus on creating amazing content.</p>
          <div className="cta-buttons">
            <button className="cta-primary">Book Coordinator</button>
            <button className="cta-secondary">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtistCoordination;
