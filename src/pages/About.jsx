import React from 'react';
import './pages.css';

function About() {
  return (
    <div className='about'>
      <h1 id="about-us">RVM Entertainment</h1>
      <p className="about-tagline">Transforming Musical Dreams Into Reality</p>
      
      <div className="about-intro">
        <p>
          We are a forward-thinking music label dedicated to discovering, nurturing, and 
          showcasing exceptional musical talent across all genres and platforms.
        </p>
      </div>
      
      <div className="about-section">
        <div className="about-image" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80)'}}></div>
        <div className="about-content">
          <h2 className="about-highlight">Empowering Artists, Amplifying Dreams</h2>
          <p>With state-of-the-art technology and industry expertise, we provide comprehensive music production, distribution, and artist development services.</p>
        </div>
      </div>
      
      <div className="stats-grid">
        <div className="stat-block">
          <div className="stat-number">50+</div>
          <div className="stat-label">Artists Signed</div>
        </div>
        <div className="stat-block">
          <div className="stat-number">200M+</div>
          <div className="stat-label">Total Streams</div>
        </div>
        <div className="stat-block">
          <div className="stat-number">15</div>
          <div className="stat-label">Countries Reached</div>
        </div>
      </div>

      <div className="about-container">
        <div className="about-story">
          <h2>Our Story</h2>
          <div className="story-item">
            <div className="story-icon">🎵</div>
            <div className="story-details">
              <h3>Foundation</h3>
              <p>Founded with a passion for creativity and sound, we specialize in music production, artist development, live events, and digital music distribution.</p>
            </div>
          </div>
          
          <div className="story-item">
            <div className="story-icon">🎯</div>
            <div className="story-details">
              <h3>Our Mission</h3>
              <p>We believe music is more than just sound—it's an experience. Our mission is to connect artists with audiences through powerful storytelling and innovative soundscapes.</p>
            </div>
          </div>
          
          <div className="story-item">
            <div className="story-icon">🚀</div>
            <div className="story-details">
              <h3>Our Vision</h3>
              <p>Driven by quality, creativity, and a deep respect for artistic vision, RVM Entertainment is not just a label—it's a movement shaping the future of music.</p>
            </div>
          </div>
        </div>

        <div className="about-values">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">💎</div>
              <h3>Quality First</h3>
              <p>We never compromise on the quality of our productions and services.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">🎨</div>
              <h3>Creative Freedom</h3>
              <p>Artists maintain full creative control while we provide expert guidance.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Authentic Partnerships</h3>
              <p>Building genuine relationships with artists, venues, and industry professionals.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">🌟</div>
              <h3>Innovation</h3>
              <p>Constantly evolving with technology and industry trends to stay ahead.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-services">
        <h2>What We Do</h2>
        <div className="services-overview">
          <div className="service-overview">
            <h3>🎼 Music Production</h3>
            <p>Chart-topping hits and unforgettable soundscapes</p>
          </div>
          <div className="service-overview">
            <h3>🎤 Artist Development</h3>
            <p>Nurturing talent from concept to stardom</p>
          </div>
          <div className="service-overview">
            <h3>🎪 Live Events</h3>
            <p>Curating immersive live experiences</p>
          </div>
          <div className="service-overview">
            <h3>📱 Digital Distribution</h3>
            <p>Global reach across all major platforms</p>
          </div>
        </div>
      </div>

      <div className="about-cta">
        <h2>Ready to Create Something Amazing?</h2>
        <p>Join us on our journey to shape the future of music, one beat at a time.</p>
        <div className="cta-buttons">
          <button className="cta-primary">Start Your Journey</button>
          <button className="cta-secondary">Explore Our Work</button>
        </div>
      </div>
    </div>
  );
}

export default About;
