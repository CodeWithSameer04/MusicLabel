import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div id="explore" className="home-container">
      {/* About Section */}
      <section className="about-section">
        <div className="content-wrapper">
          <h2>Empowering Music, Amplifying Dreams</h2>
          <p className="subtitle">
            We are a full-service music label dedicated to discovering, developing, and promoting 
            exceptional talent across all genres. From indie artists to chart-toppers, we provide 
            the platform and expertise to turn musical visions into reality.
          </p>
        </div>
      </section>

      {/* Featured Artists Section */}
      <section className="featured-section">
        <div className="content-wrapper">
          <h2>Featured Artists</h2>
          <div className="artists-grid">
            <div className="artist-card">
              <div className="artist-image">
                <div className="placeholder-img">🎤</div>
              </div>
              <h3>Luna Rodriguez</h3>
              <p className="genre">Pop / R&B</p>
              <p>Rising star with over 2M streams on her debut single "Midnight Dreams"</p>
            </div>
            <div className="artist-card">
              <div className="artist-image">
                <div className="placeholder-img">🎸</div>
              </div>
              <h3>The Neon Collective</h3>
              <p className="genre">Indie Rock</p>
              <p>Award-winning band known for their electrifying live performances</p>
            </div>
            <div className="artist-card">
              <div className="artist-image">
                <div className="placeholder-img">🎹</div>
              </div>
              <h3>Marcus Chen</h3>
              <p className="genre">Electronic / Ambient</p>
              <p>Producer and composer creating immersive soundscapes for film and games</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Releases Section */}
      <section className="releases-section">
        <div className="content-wrapper">
          <h2>Latest Releases</h2>
          <div className="albums-grid">
            <div className="album-card">
              <div className="album-cover">
                <div className="placeholder-cover">🎵</div>
              </div>
              <h3>"Echoes of Tomorrow"</h3>
              <p className="artist-name">Luna Rodriguez</p>
              <p className="release-date">Released: December 2024</p>
              <div className="streaming-links">
                <span className="stream-badge">🎧 Spotify</span>
                <span className="stream-badge">🍎 Apple Music</span>
              </div>
            </div>
            <div className="album-card">
              <div className="album-cover">
                <div className="placeholder-cover">🌊</div>
              </div>
              <h3>"Electric Nights"</h3>
              <p className="artist-name">The Neon Collective</p>
              <p className="release-date">Released: November 2024</p>
              <div className="streaming-links">
                <span className="stream-badge">🎧 Spotify</span>
                <span className="stream-badge">🍎 Apple Music</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="services-preview">
        <div className="content-wrapper">
          <h2>What We Offer</h2>
          <div className="services-grid">
            <div className="service-item">
              <div className="service-icon">🎤</div>
              <h3>Recording Studio</h3>
              <p>State-of-the-art facilities with industry-standard equipment</p>
            </div>
            <div className="service-item">
              <div className="service-icon">🎵</div>
              <h3>Music Production</h3>
              <p>Full-service production from composition to final mastering</p>
            </div>
            <div className="service-item">
              <div className="service-icon">🌐</div>
              <h3>Distribution</h3>
              <p>Global reach across all major streaming platforms</p>
            </div>
            <div className="service-item">
              <div className="service-icon">📹</div>
              <h3>Video Production</h3>
              <p>Music videos, behind-the-scenes, and promotional content</p>
            </div>
          </div>
          <Link to="/services" className="services-link">View All Services →</Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="content-wrapper">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>50+</h3>
              <p>Artists Signed</p>
            </div>
            <div className="stat-item">
              <h3>200M+</h3>
              <p>Total Streams</p>
            </div>
            <div className="stat-item">
              <h3>15</h3>
              <p>Countries Reached</p>
            </div>
            <div className="stat-item">
              <h3>5</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="content-wrapper">
          <h2>Ready to Make Your Mark?</h2>
          <p>
            Whether you're an emerging artist or an established musician looking for a new home, 
            we're here to help you reach your full potential.
          </p>
          <div className="cta-buttons">
            <Link to="/contacts" className="cta-button primary">Submit Your Demo</Link>
            <Link to="/about" className="cta-button secondary">Learn More About Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
