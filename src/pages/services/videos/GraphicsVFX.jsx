import React from 'react';
import '../../pages.css';

function GraphicsVFX() {
  return (
    <div className="service-page">
      <div className="service-hero">
        <h1>Graphics & VFX</h1>
        <span className="service-highlight">Motion Graphics, Visual Effects & Animation</span>
        <p className="service-intro">
          Enhance your videos with stunning motion graphics, visual effects, and animation that captivate audiences and elevate your content.
        </p>
      </div>

      <div className="service-content">
        <div className="service-features">
          <h2>Creative Services</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">✨</div>
              <h3>Motion Graphics</h3>
              <p>Dynamic motion graphics, titles, and animated elements for your videos. Transform static designs into engaging animations that captivate and inform your audience.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎬</div>
              <h3>Visual Effects</h3>
              <p>Professional VFX including compositing, green screen, and digital environments. Create impossible worlds and enhance reality with our cutting-edge visual effects capabilities.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>2D/3D Animation</h3>
              <p>Custom 2D and 3D animations, character animation, and explainer videos. Bring concepts to life through compelling animated content that tells your story effectively.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏷️</div>
              <h3>Branding Integration</h3>
              <p>Seamless integration of your brand elements and visual identity. Ensure consistent brand representation across all your visual content with our expert design integration.</p>
            </div>
          </div>
        </div>

        <div className="service-pricing">
          <h2>Creative Packages</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Basic Graphics</h3>
              <div className="price">$200/hr</div>
              <ul>
                <li>Simple motion graphics</li>
                <li>Title animations</li>
                <li>Basic compositing</li>
                <li>Logo integration</li>
              </ul>
            </div>
            <div className="pricing-card featured">
              <h3>Professional VFX</h3>
              <div className="price">$4,500</div>
              <ul>
                <li>Advanced motion graphics</li>
                <li>Complex VFX sequences</li>
                <li>3D elements integration</li>
                <li>Multiple revisions</li>
              </ul>
            </div>
            <div className="pricing-card">
              <h3>Custom Animation</h3>
              <div className="price">Custom</div>
              <ul>
                <li>Full animation production</li>
                <li>Character development</li>
                <li>Storyboard creation</li>
                <li>Complete post-production</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="service-cta">
          <h2>Ready to Add Magic to Your Videos?</h2>
          <p>Transform your content with stunning graphics and effects that tell your story in extraordinary ways.</p>
          <div className="cta-buttons">
            <button className="cta-primary">Start VFX Project</button>
            <button className="cta-secondary">View Portfolio</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GraphicsVFX;
