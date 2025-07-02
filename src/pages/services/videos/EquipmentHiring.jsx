import React from 'react';
import '../../pages.css';

function EquipmentHiring() {
  return (
    <div className="service-page">
      <div className="service-hero">
        <h1>Equipment Hiring</h1>
        <span className="service-highlight">Professional Video Equipment Rental</span>
        <p className="service-intro">
          Access high-end video production equipment for your projects with flexible rental options and technical support.
        </p>
      </div>

      <div className="service-content">
        <div className="service-features">
          <h2>Available Equipment</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📹</div>
              <h3>Cameras & Lenses</h3>
              <p>Professional cameras, cinema lenses, and specialty recording equipment. From 4K cinema cameras to professional camcorders, we have everything you need to capture stunning visuals.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h3>Lighting Equipment</h3>
              <p>LED panels, softboxes, gels, and professional lighting control systems. Create the perfect atmosphere with our extensive lighting packages for any production scenario.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎤</div>
              <h3>Audio Gear</h3>
              <p>Microphones, wireless systems, audio recorders, and monitoring equipment. Capture crystal-clear audio with our comprehensive selection of professional sound equipment.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎬</div>
              <h3>Support & Rigging</h3>
              <p>Tripods, stabilizers, cranes, dollies, and rigging equipment. Achieve smooth, professional camera movements and stable shots with our support gear collection.</p>
            </div>
          </div>
        </div>

        <div className="service-process">
          <h2>Rental Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Equipment Consultation</h3>
                <p>Discuss your project needs and receive equipment recommendations.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Booking & Pickup</h3>
                <p>Reserve equipment and schedule pickup or delivery.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Technical Support</h3>
                <p>On-call technical support during your rental period.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Return & Check</h3>
                <p>Equipment return with comprehensive functionality check.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="service-pricing">
          <h2>Rental Rates</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Daily Rate</h3>
              <div className="price">Starting at $50</div>
              <ul>
                <li>24-hour rental period</li>
                <li>Basic equipment insurance</li>
                <li>Equipment tutorial included</li>
                <li>Phone support</li>
              </ul>
            </div>
            <div className="pricing-card featured">
              <h3>Weekly Package</h3>
              <div className="price">5-day rate</div>
              <ul>
                <li>7-day rental period</li>
                <li>Comprehensive insurance</li>
                <li>On-site setup available</li>
                <li>Technical support</li>
              </ul>
            </div>
            <div className="pricing-card">
              <h3>Production Package</h3>
              <div className="price">Custom</div>
              <ul>
                <li>Long-term rentals</li>
                <li>Complete equipment packages</li>
                <li>Dedicated technician</li>
                <li>Backup equipment included</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="service-cta">
          <h2>Need Equipment for Your Project?</h2>
          <p>Browse our extensive inventory and get professional equipment for your next video production.</p>
          <div className="cta-buttons">
            <button className="cta-primary">View Equipment Catalog</button>
            <button className="cta-secondary">Request Quote</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EquipmentHiring;
