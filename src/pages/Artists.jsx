import React from 'react';
import FlipGallery from '../components/ui/FlipGallery';
import './Artists.css';

function Artists() {
  return (
    <div className="artists-page">
      <div className="artists-hero">
        <div className="artists-hero-content">
          <h1>Our Featured Artists</h1>
          <p className="artists-subtitle">
            Discover the talented musicians and performers who make our label extraordinary. 
            Each artist brings their unique sound and vision to create unforgettable music experiences.
          </p>
        </div>
      </div>

      <div className="artists-gallery-section">
        <FlipGallery />
      </div>

      <div className="artists-info">
        <div className="content-wrapper">
          <section className="artists-showcase">
            <h2>Meet Our Artists</h2>
            <div className="artists-grid">
              <div className="artist-info-card">
                <h3>Luna Rodriguez</h3>
                <p className="genre">Pop / R&B</p>
                <p>Rising star with over 2M streams on her debut single "Midnight Dreams". Luna's soulful voice and contemporary R&B style have captivated audiences worldwide.</p>
                <div className="artist-stats">
                  <span>🎵 5 Singles Released</span>
                  <span>📈 2M+ Streams</span>
                  <span>🏆 2 Music Awards</span>
                </div>
              </div>

              <div className="artist-info-card">
                <h3>The Neon Collective</h3>
                <p className="genre">Indie Rock</p>
                <p>Award-winning band known for their electrifying live performances and innovative sound. Their latest album "Electric Nights" topped indie charts.</p>
                <div className="artist-stats">
                  <span>🎸 3 Albums Released</span>
                  <span>🎫 50+ Live Shows</span>
                  <span>🏆 Best Indie Album 2024</span>
                </div>
              </div>

              <div className="artist-info-card">
                <h3>Marcus Chen</h3>
                <p className="genre">Electronic / Ambient</p>
                <p>Producer and composer creating immersive soundscapes for film, games, and meditation. His ambient compositions transport listeners to otherworldly realms.</p>
                <div className="artist-stats">
                  <span>🎹 10+ Film Scores</span>
                  <span>🎮 5 Game Soundtracks</span>
                  <span>🧘 1M+ Meditation Streams</span>
                </div>
              </div>

              <div className="artist-info-card">
                <h3>Aria Blackwood</h3>
                <p className="genre">Alternative / Folk</p>
                <p>Singer-songwriter with a haunting voice and poetic lyrics. Her introspective songs explore themes of love, loss, and self-discovery.</p>
                <div className="artist-stats">
                  <span>📝 50+ Original Songs</span>
                  <span>🎤 Coffee House Tours</span>
                  <span>📀 Debut Album Coming 2025</span>
                </div>
              </div>

              <div className="artist-info-card">
                <h3>Echo Valley</h3>
                <p className="genre">Synthwave / Retro</p>
                <p>Nostalgic synthwave duo bringing '80s vibes to modern ears. Their neon-soaked sound design and vintage aesthetics create pure sonic magic.</p>
                <div className="artist-stats">
                  <span>🌟 Synthwave Charts #1</span>
                  <span>🎛️ Custom Synthesizers</span>
                  <span>📻 Radio Play Worldwide</span>
                </div>
              </div>

              <div className="artist-info-card">
                <h3>DJ Synthesis</h3>
                <p className="genre">Electronic / House</p>
                <p>Tech house innovator pushing boundaries with experimental beats and bass lines. Known for marathon sets and underground club residencies.</p>
                <div className="artist-stats">
                  <span>🎧 100+ Club Sets</span>
                  <span>🏙️ 10 City Tour 2024</span>
                  <span>🔥 Beatport Top 10</span>
                </div>
              </div>

              <div className="artist-info-card">
                <h3>Velvet Storm</h3>
                <p className="genre">Jazz / Neo-Soul</p>
                <p>Sophisticated jazz ensemble blending traditional and contemporary styles. Their smooth sound and improvisation skills make every performance unique.</p>
                <div className="artist-stats">
                  <span>🎺 5-Piece Ensemble</span>
                  <span>🎭 Jazz Festival Headliners</span>
                  <span>🎼 Original Compositions</span>
                </div>
              </div>

              <div className="artist-info-card">
                <h3>Phoenix Rising</h3>
                <p className="genre">Progressive Rock</p>
                <p>Epic progressive rock band crafting conceptual albums and theatrical live shows. Their complex compositions and storytelling captivate audiences globally.</p>
                <div className="artist-stats">
                  <span>🎸 15-Minute Epics</span>
                  <span>🎭 Theatrical Performances</span>
                  <span>🌍 International Tours</span>
                </div>
              </div>
            </div>
          </section>

          <section className="join-artists">
            <h2>Become Part of Our Artist Family</h2>
            <p>
              Are you a talented musician looking for a label that truly cares about your artistic vision? 
              We're always seeking passionate artists who want to take their music to the next level.
            </p>
            <div className="join-cta">
              <button className="cta-btn primary">Submit Your Demo</button>
              <button className="cta-btn secondary">Artist Requirements</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Artists;
