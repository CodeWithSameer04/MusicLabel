import React from 'react';
import '../../pages.css';

function MusicLabel() {
  return (
    <div className="service-page">
      <div className="service-hero">
        <h1>Music Label Services</h1>
        <span className="service-highlight">Professional Music Label & Artist Development</span>
        <p className="service-intro">
          Launch your music career with our comprehensive label services. We provide complete 
          artist development, marketing, and industry connections to help you succeed.
        </p>
      </div>

      <div className="service-content">
        <div className="service-features">
          <h2>What We Offer</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎵</div>
              <h3>Artist Development</h3>
              <p>Complete artist branding, image consultation, and career strategy development. Our expert team will help you carve out a unique image and sound that sets you apart in the music industry.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3>Marketing & Promotion</h3>
              <p>Digital marketing campaigns, social media management, and press relations. We create buzz around your brand to maximize your visibility and reach the right audience.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Industry Connections</h3>
              <p>Access to our network of industry professionals, venues, and collaborators. Get linked with the best in the business to kickstart your career.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Revenue Management</h3>
              <p>Royalty collection, licensing deals, and revenue optimization strategies. We ensure you get paid every cent you earn and help you devise ways to multiply your income.</p>
            </div>
          </div>
        </div>

        <div className="service-process">
          <h2>Our Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Initial Consultation</h3>
                <p>We meet to discuss your goals, assess your current position, and create a development plan.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Artist Development</h3>
                <p>Work on branding, image, sound development, and creating professional materials.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Recording & Production</h3>
                <p>Professional recording sessions and high-quality production of your music.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Release & Promotion</h3>
                <p>Strategic release planning, marketing campaigns, and ongoing promotion.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="service-pricing">
          <h2>Investment Plans</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Starter Package</h3>
              <div className="price">$2,500</div>
              <ul>
                <li>3-month development program</li>
                <li>Branding consultation</li>
                <li>2 single releases</li>
                <li>Basic marketing support</li>
              </ul>
            </div>
            <div className="pricing-card featured">
              <h3>Professional Package</h3>
              <div className="price">$7,500</div>
              <ul>
                <li>6-month development program</li>
                <li>Complete branding package</li>
                <li>Album production support</li>
                <li>Comprehensive marketing campaign</li>
                <li>Industry networking events</li>
              </ul>
            </div>
            <div className="pricing-card">
              <h3>Elite Package</h3>
              <div className="price">Custom</div>
              <ul>
                <li>12+ month partnership</li>
                <li>Full artist development</li>
                <li>Tour booking support</li>
                <li>Advanced revenue management</li>
                <li>Dedicated team support</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="service-cta">
          <h2>Ready to Launch Your Music Career?</h2>
          <p>Let's discuss how our music label services can help you achieve your artistic goals and build a sustainable music career.</p>
          <div className="cta-buttons">
            <button className="cta-primary">Schedule Consultation</button>
            <button className="cta-secondary">View Portfolio</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicLabel;
