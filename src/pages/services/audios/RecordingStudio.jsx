import React from 'react';
import '../../pages.css';

function RecordingStudio() {
  return (
    <div className="service-page">
      <div className="service-hero">
        <h1>Recording Studio</h1>
        <span className="service-highlight">State-of-the-Art Recording Facilities</span>
        <p className="service-intro">
          Experience professional recording in our world-class studio equipped with the latest technology and instruments.
        </p>
      </div>

      <div className="service-content">
        <div className="service-features">
          <h2>Studio Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎤</div>
              <h3>Premium Microphones</h3>
              <p>Collection of industry-standard microphones for every recording need. Capture every nuance of your sound with impeccable clarity and depth.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔊</div>
              <h3>Monitoring Systems</h3>
              <p>High-end studio monitors and headphones for accurate sound reproduction. Experience in-studio playback like never before.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎛️</div>
              <h3>Mixing Console</h3>
              <p>Professional mixing boards and digital audio workstations. Tweak and perfect your tracks with precision and ease.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎸</div>
              <h3>Instruments Available</h3>
              <p>Access to guitars, keyboards, drums, and other professional instruments. We've got the right tool for every sound.</p>
            </div>
          </div>
        </div>

        <div className="service-process">
          <h2>Recording Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Pre-Production</h3>
                <p>Song arrangement, rehearsal, and preparation for recording.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Recording Session</h3>
                <p>Professional recording with our experienced engineers.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Mixing</h3>
                <p>Professional mixing to balance and enhance your tracks.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Mastering</h3>
                <p>Final mastering for commercial release standards.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="service-pricing">
          <h2>Studio Rates</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Hourly Rate</h3>
              <div className="price">$150/hr</div>
              <ul>
                <li>Engineer included</li>
                <li>Basic equipment access</li>
                <li>Raw recordings provided</li>
              </ul>
            </div>
            <div className="pricing-card featured">
              <h3>Day Package</h3>
              <div className="price">$1,200</div>
              <ul>
                <li>10-hour session</li>
                <li>Senior engineer</li>
                <li>All equipment included</li>
                <li>Basic mixing included</li>
              </ul>
            </div>
            <div className="pricing-card">
              <h3>Album Package</h3>
              <div className="price">Custom</div>
              <ul>
                <li>Multiple day booking</li>
                <li>Producer consultation</li>
                <li>Full mixing & mastering</li>
                <li>Project management</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="service-cta">
          <h2>Ready to Record?</h2>
          <p>Book your session today and bring your musical vision to life in our professional recording environment.</p>
          <div className="cta-buttons">
            <button className="cta-primary">Book Studio Time</button>
            <button className="cta-secondary">Tour Our Facility</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecordingStudio;
