import React from 'react';
import '../../pages.css';

function Locations() {
  return (
    <div className="service-page">
      <div className="service-hero">
        <h1>Locations</h1>
        <span className="service-highlight">Premium Filming Locations & Venue Coordination</span>
        <p className="service-intro">
          Access to exclusive filming locations and comprehensive venue coordination for your video productions.
        </p>
      </div>

      <div className="service-content">
        <div className="service-features">
          <h2>Location Services</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🏢</div>
              <h3>Studio Spaces</h3>
              <p>Professional studio spaces with controlled environments and equipment access. Perfect acoustics and lighting conditions for your most demanding productions.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌆</div>
              <h3>Urban Locations</h3>
              <p>Diverse city locations including rooftops, streets, and architectural landmarks. Capture the energy and aesthetic of urban environments with our curated location database.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌲</div>
              <h3>Natural Settings</h3>
              <p>Beautiful outdoor locations including parks, beaches, and scenic landscapes. Connect with nature and create breathtaking visuals in stunning natural environments.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📋</div>
              <h3>Permit Assistance</h3>
              <p>Complete permit acquisition and location logistics management. Navigate the complex permitting process with our experienced location coordinators who handle all the paperwork.</p>
            </div>
          </div>
        </div>

        <div className="service-pricing">
          <h2>Location Packages</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Studio Rental</h3>
              <div className="price">$300/day</div>
              <ul>
                <li>8-hour studio access</li>
                <li>Basic lighting setup</li>
                <li>Equipment storage</li>
                <li>Parking included</li>
              </ul>
            </div>
            <div className="pricing-card featured">
              <h3>Location Package</h3>
              <div className="price">$800/day</div>
              <ul>
                <li>Premium location access</li>
                <li>Permit handling</li>
                <li>Location scout included</li>
                <li>Setup coordination</li>
              </ul>
            </div>
            <div className="pricing-card">
              <h3>Multi-Location</h3>
              <div className="price">Custom</div>
              <ul>
                <li>Multiple venue access</li>
                <li>Transportation coordination</li>
                <li>Extended permits</li>
                <li>Dedicated location manager</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="service-cta">
          <h2>Find the Perfect Location</h2>
          <p>Discover amazing filming locations that will bring your creative vision to life.</p>
          <div className="cta-buttons">
            <button className="cta-primary">Browse Locations</button>
            <button className="cta-secondary">Location Scout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Locations;
