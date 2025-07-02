import React from 'react';
import '../../pages.css';

function VideoShooting() {
  return (
    <div className="service-page">
      <div className="service-hero">
        <h1>Video Shooting</h1>
        <span className="service-highlight">Complete Video Production & Cinematography</span>
        <p className="service-intro">
          Professional video production services from concept to completion with experienced crews and state-of-the-art equipment.
        </p>
      </div>

      <div className="service-content">
        <div className="service-features">
          <h2>Production Services</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎥</div>
              <h3>Multi-Camera Setup</h3>
              <p>Professional multi-camera productions for events, interviews, and performances. Capture every angle and moment with our expertly coordinated multi-camera shooting systems.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎬</div>
              <h3>Cinematography</h3>
              <p>Creative cinematography with professional cameras and cinema lenses. Our talented cinematographers bring your vision to life with stunning visual storytelling techniques.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Experienced Crew</h3>
              <p>Skilled directors, camera operators, and production assistants. Work with seasoned professionals who understand the nuances of video production from start to finish.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Live Streaming</h3>
              <p>Professional live streaming services for events and performances. Connect with your audience in real-time with our high-quality streaming solutions and technical support.</p>
            </div>
          </div>
        </div>

        <div className="service-pricing">
          <h2>Production Packages</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Basic Shoot</h3>
              <div className="price">$2,500</div>
              <ul>
                <li>Single camera setup</li>
                <li>4-hour shooting</li>
                <li>Basic lighting</li>
                <li>Raw footage delivery</li>
              </ul>
            </div>
            <div className="pricing-card featured">
              <h3>Professional Package</h3>
              <div className="price">$5,500</div>
              <ul>
                <li>Multi-camera setup</li>
                <li>8-hour production day</li>
                <li>Professional lighting</li>
                <li>Basic editing included</li>
              </ul>
            </div>
            <div className="pricing-card">
              <h3>Premium Production</h3>
              <div className="price">Custom</div>
              <ul>
                <li>Multiple shooting days</li>
                <li>Complete crew</li>
                <li>Advanced equipment</li>
                <li>Full post-production</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="service-cta">
          <h2>Ready to Start Filming?</h2>
          <p>Let's bring your vision to life with professional video production services.</p>
          <div className="cta-buttons">
            <button className="cta-primary">Book Production</button>
            <button className="cta-secondary">View Our Work</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoShooting;
