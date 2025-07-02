import React from 'react';
import '../../pages.css';

function EditingPost() {
  return (
    <div className="service-page">
      <div className="service-hero">
        <h1>Editing & Post-Production</h1>
        <span className="service-highlight">Professional Video Editing & Post-Production</span>
        <p className="service-intro">
          Transform your raw footage into polished, professional content with our comprehensive editing and post-production services.
        </p>
      </div>

      <div className="service-content">
        <div className="service-features">
          <h2>Post-Production Services</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">✂️</div>
              <h3>Video Editing</h3>
              <p>Professional video editing with advanced software and creative storytelling. Transform raw footage into compelling narratives that engage and captivate your audience.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Color Grading</h3>
              <p>Professional color correction and grading for cinematic quality. Enhance the mood and visual appeal of your content with our expert colorist's artistic touch.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔊</div>
              <h3>Audio Post</h3>
              <p>Audio editing, mixing, sound design, and music integration. Create immersive soundscapes that complement and enhance your visual storytelling.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Multi-Format Delivery</h3>
              <p>Optimized exports for web, social media, broadcast, and cinema. Ensure your content looks perfect on every platform and device with our format optimization expertise.</p>
            </div>
          </div>
        </div>

        <div className="service-pricing">
          <h2>Editing Packages</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Basic Edit</h3>
              <div className="price">$150/hr</div>
              <ul>
                <li>Standard video editing</li>
                <li>Basic color correction</li>
                <li>Audio cleanup</li>
                <li>One revision round</li>
              </ul>
            </div>
            <div className="pricing-card featured">
              <h3>Professional Package</h3>
              <div className="price">$2,800</div>
              <ul>
                <li>Complete post-production</li>
                <li>Advanced color grading</li>
                <li>Sound design & mixing</li>
                <li>Multiple format delivery</li>
              </ul>
            </div>
            <div className="pricing-card">
              <h3>Premium Production</h3>
              <div className="price">Custom</div>
              <ul>
                <li>Complex projects</li>
                <li>Advanced VFX integration</li>
                <li>Dedicated editor</li>
                <li>Unlimited revisions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="service-cta">
          <h2>Ready to Polish Your Content?</h2>
          <p>Let our experienced editors transform your footage into compelling, professional content.</p>
          <div className="cta-buttons">
            <button className="cta-primary">Start Editing Project</button>
            <button className="cta-secondary">View Our Work</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditingPost;
