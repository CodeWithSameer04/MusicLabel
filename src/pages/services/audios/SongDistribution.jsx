import React from 'react';
import '../../pages.css';

function SongDistribution() {
  return (
    <div className="service-page">
      <div className="service-hero">
        <h1>Song Distribution</h1>
        <span className="service-highlight">Global Music Distribution</span>
        <p className="service-intro">
          Expand your reach with global distribution to all major music platforms, increasing your audience worldwide.
        </p>
      </div>

      <div className="service-content">
        <div className="service-features">
          <h2>What We Offer</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🌎</div>
              <h3>Platform Access</h3>
              <p>Access to Spotify, Apple Music, Amazon Music, and more. We ensure your music is available everywhere your fans want to listen.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔗</div>
              <h3>Seamless Integration</h3>
              <p>Easy integration with your existing platforms and services. Our distribution is designed to work seamlessly with your existing operations.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Analytics & Insights</h3>
              <p>Detailed analytics and reporting to track your music's performance. Gain actionable insights on audience demographics and streaming statistics.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💸</div>
              <h3>Revenue Collection</h3>
              <p>Efficient royalty collection and transparent payment processes. We handle the intricate financial details so you can focus on your music.</p>
            </div>
          </div>
        </div>

        <div className="service-process">
          <h2>Our Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Registration</h3>
                <p>Register your tracks for global distribution.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Platform Launch</h3>
                <p>We launch your music on chosen platforms.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Promotion Assistance</h3>
                <p>Optional promotional services to boost your track's visibility.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Tracking & Adjusting</h3>
                <p>Track performance and adjust strategies as needed.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="service-pricing">
          <h2>Investment Plans</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Basic Plan</h3>
              <div className="price">$99</div>
              <ul>
                <li>Distribution to top 10 platforms</li>
                <li>Basic reporting tools</li>
                <li>Monthly revenue deposits</li>
              </ul>
            </div>
            <div className="pricing-card featured">
              <h3>Pro Plan</h3>
              <div className="price">$249</div>
              <ul>
                <li>Unlimited platform distribution</li>
                <li>Advanced insights</li>
                <li>Extended promotion options</li>
              </ul>
            </div>
            <div className="pricing-card">
              <h3>Enterprise Plan</h3>
              <div className="price">Custom</div>
              <ul>
                <li>Tailored distribution strategy</li>
                <li>Dedicated account manager</li>
                <li>Real-time KPI tracking</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="service-cta">
          <h2>Ready to Distribute Your Music?</h2>
          <p>Let's talk about how you can maximize your reach with our comprehensive distribution packages.</p>
          <div className="cta-buttons">
            <button className="cta-primary">Get Started</button>
            <button className="cta-secondary">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SongDistribution;

