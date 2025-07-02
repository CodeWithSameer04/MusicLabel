import React from 'react';
import { Link } from 'react-router-dom';
import './AudioServices.css';

const AudioServices = () => {
  const audioServices = [
    {
      title: "Music Label",
      href: "/services/audio/music-label",
      icon: "🎵",
      description: "Professional music label services and artist development with comprehensive support for emerging and established artists."
    },
    {
      title: "Song Distribution",
      href: "/services/audio/song-distribution",
      icon: "🌐",
      description: "Global music distribution across all major platforms including Spotify, Apple Music, and more."
    },
    {
      title: "Music Production",
      href: "/services/audio/music-production",
      icon: "🎧",
      description: "Full-service music production and recording with state-of-the-art equipment and experienced producers."
    },
    {
      title: "Recording Studio",
      href: "/services/audio/recording-studio",
      icon: "🎤",
      description: "State-of-the-art recording facilities and equipment for professional audio recording sessions."
    },
    {
      title: "On Set Sync Sound",
      href: "/services/audio/on-set-sync-sound",
      icon: "🎬",
      description: "Professional on-location sound recording and sync services for film and video productions."
    }
  ];

  return (
    <div className="audio-services-page">
      <div className="audio-services-header">
        <h1>Audio Services</h1>
        <p>Professional audio production and music services to bring your creative vision to life</p>
      </div>

      <div className="audio-services-grid">
        {audioServices.map((service, index) => (
          <Link to={service.href} key={index} className="audio-service-card">
            <div className="audio-service-icon">{service.icon}</div>
            <div className="audio-service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="audio-service-arrow">→</div>
            </div>
          </Link>
        ))}
      </div>

      <div className="audio-cta-section">
        <h2>Ready to Start Your Audio Project?</h2>
        <p>Contact us to discuss your audio production needs and get a custom quote.</p>
        <Link to="/contacts" className="audio-cta-button">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default AudioServices;
