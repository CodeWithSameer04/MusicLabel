import React from 'react';
import './Albums.css';

function Albums() {
  const albums = [
    {
      title: "Midnight Dreams",
      songs: ["City Lights", "Neon Nights", "Digital Love", "Cosmic Dance"]
    },
    {
      title: "Ocean Waves",
      songs: ["Tidal Flow", "Deep Blue", "Serenity", "Endless Horizon"]
    },
    {
      title: "Electric Pulse",
      songs: ["Voltage", "Circuit Breaker", "Power Surge", "Static Dreams"]
    },
    {
      title: "Acoustic Sessions",
      songs: ["Gentle Breeze", "Campfire Stories", "Mountain Echo", "Quiet Moments"]
    },
    {
      title: "Urban Symphony",
      songs: ["Street Beat", "Metro Rush", "City Skyline", "Traffic Jam Blues"]
    },
    {
      title: "Vintage Vibes",
      songs: ["Retro Groove", "Old School Cool", "Timeless", "Classic Motion"]
    },
    {
      title: "Future Sounds",
      songs: ["Hologram", "Space Station", "Time Warp", "Galaxy Explorer"]
    },
    {
      title: "Emotional Journey",
      songs: ["Heartbeat", "Memories", "Hope Rising", "Inner Peace"]
    },
    {
      title: "Dance Floor",
      songs: ["Beat Drop", "Party Anthem", "Club Nights", "Rhythm Revolution"]
    }
  ];

  return (
    <div className="albums-container">
      <h1 className="albums-title">Albums</h1>
      
      <div className="albums-grid">
        {albums.map((album, index) => (
          <div key={index} className="album-card">
            <h3 className="album-title">{album.title}</h3>
            
            <ul className="songs-list">
              {album.songs.map((song, songIndex) => (
                <li key={songIndex} className="song-item">
                  <span className="song-bullet"></span>
                  <span className="song-name">{song}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Albums;
