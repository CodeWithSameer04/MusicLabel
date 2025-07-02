import React from 'react';
import './pages.css';

function Clients() {
  const getClientIcon = (genre) => {
    const iconMap = {
      'Electronic Pop': '🎵',
      'Indie Rock': '🎸',
      'R&B/Soul': '🎤',
      'Synthwave': '🎹',
      'Hip-Hop': '🎧',
      'Folk/Acoustic': '🎻'
    };
    return iconMap[genre] || '🎵';
  };

  const featuredClients = [
    {
      name: "Alex Rivera",
      genre: "Electronic Pop",
      achievement: "1M+ streams on debut single",
      testimonial: "RVM Entertainment transformed my sound and helped me reach audiences I never thought possible."
    },
    {
      name: "The Midnight Collective",
      genre: "Indie Rock",
      achievement: "Featured on Spotify's New Music Friday",
      testimonial: "Professional, creative, and dedicated. RVM made our vision come to life."
    },
    {
      name: "Luna Santos",
      genre: "R&B/Soul",
      achievement: "Chart debut at #15 on indie charts",
      testimonial: "From production to promotion, RVM handled everything with exceptional quality."
    },
    {
      name: "Neon Dreams",
      genre: "Synthwave",
      achievement: "Featured in major TV commercial",
      testimonial: "RVM's attention to detail and industry connections opened doors we couldn't open alone."
    },
    {
      name: "Marcus Thompson",
      genre: "Hip-Hop",
      achievement: "100K+ monthly listeners",
      testimonial: "RVM Entertainment doesn't just produce music - they craft careers."
    },
    {
      name: "Echo Valley",
      genre: "Folk/Acoustic",
      achievement: "Sold-out regional tour",
      testimonial: "Working with RVM was the best decision we made for our music career."
    }
  ];

  return (
    <div className='clients'>
      <h1 id="our-clients">Our Clients</h1>
      <span className="clients-highlight">Artists We're Proud to Work With</span>
      
      <div className="clients-intro">
        <p>
          At RVM Entertainment, we've had the privilege of working with diverse and talented artists 
          across multiple genres. From emerging talents to established performers, our clients represent 
          the future of music. Here are some of the incredible artists who have trusted us with their 
          musical journey.
        </p>
      </div>

      <div className="clients-container">
        <div className="clients-showcase">
          <h2>Featured Artists</h2>
          <div className="clients-grid">
            {featuredClients.map((client, index) => (
              <div key={index} className="client-card">
                <div className="client-header">
                  <div className="client-avatar">{getClientIcon(client.genre)}</div>
                  <div className="client-info">
                    <h3>{client.name}</h3>
                    <span className="client-genre">{client.genre}</span>
                  </div>
                </div>
                <div className="client-achievement">
                  <strong>Achievement:</strong> {client.achievement}
                </div>
                <div className="client-testimonial">
                  <p>"{client.testimonial}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="clients-stats">
        <h2>Our Impact</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Artists Signed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">25M+</div>
            <div className="stat-label">Total Streams</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100+</div>
            <div className="stat-label">Songs Produced</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label">Chart Entries</div>
          </div>
        </div>
      </div>

      <div className="clients-cta">
        <h2>Ready to Join Our Family?</h2>
        <p>
          Whether you're an emerging artist or an established performer looking for a new direction, 
          RVM Entertainment is here to help you achieve your musical goals. Let's create something 
          extraordinary together.
        </p>
        <div className="cta-buttons">
          <button className="cta-primary">Submit Your Demo</button>
          <button className="cta-secondary">Learn About Our Services</button>
        </div>
      </div>
    </div>
  );
}

export default Clients;
