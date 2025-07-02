import React from 'react';
import '../../pages.css';

function OnSetSyncSound() {
  return (
    <div className="service-page">
      <div className="service-hero">
        <h1>On Set Sync Sound</h1>
        <span className="service-highlight">Professional On-Location Sound Recording</span>
        <p className="service-intro">
          Capture pristine audio on location with our professional sync sound recording services for film, TV, and video productions.
        </p>
      </div>

      <div className="service-content">
        <div className="service-features">
          <h2>Our Services</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎤️</div>
              <h3>Location Recording</h3>
              <p>Professional audio capture in any environment with portable equipment. Our field recording specialists ensure pristine sound quality in challenging acoustic environments.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📡</div>
              <h3>Wireless Systems</h3>
              <p>Advanced wireless microphone systems for maximum mobility and clarity. Freedom of movement without compromising audio quality, perfect for dynamic performances.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3>Sync Technology</h3>
              <p>Perfect audio-video synchronization using professional timecode systems. Seamless integration with multi-camera setups for flawless post-production workflows.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛠️</div>
              <h3>Post-Production</h3>
              <p>Audio cleanup, mixing, and post-production services available. Transform raw field recordings into broadcast-ready audio that meets professional standards.</p>
            </div>
          </div>
        </div>

        <div className="service-process">
          <h2>Our Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Pre-Production Planning</h3>
                <p>Script analysis, location scouting, and equipment planning.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>On-Set Recording</h3>
                <p>Professional sound recording during production with real-time monitoring.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Quality Control</h3>
                <p>Immediate audio quality assessment and backup recording strategies.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Delivery</h3>
                <p>Organized audio files with detailed notes and sync references.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="service-pricing">
          <h2>Service Rates</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Half Day</h3>
              <div className="price">$800</div>
              <ul>
                <li>Up to 6 hours</li>
                <li>Sound engineer included</li>
                <li>Basic equipment package</li>
                <li>Raw audio files</li>
              </ul>
            </div>
            <div className="pricing-card featured">
              <h3>Full Day</h3>
              <div className="price">$1,500</div>
              <ul>
                <li>Up to 12 hours</li>
                <li>Senior sound engineer</li>
                <li>Complete equipment package</li>
                <li>Organized deliverables</li>
              </ul>
            </div>
            <div className="pricing-card">
              <h3>Multi-Day Project</h3>
              <div className="price">Custom</div>
              <ul>
                <li>Extended production support</li>
                <li>Dedicated sound team</li>
                <li>Advanced equipment options</li>
                <li>Post-production included</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="service-cta">
          <h2>Need Professional Sound Recording?</h2>
          <p>Let our experienced sound engineers capture perfect audio for your next production.</p>
          <div className="cta-buttons">
            <button className="cta-primary">Book Sound Engineer</button>
            <button className="cta-secondary">View Equipment List</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnSetSyncSound;
