import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const audioServices = [
    {
      title: "Music Label",
      href: "/services/audio/music-label",
      icon: "🎵",
      description: "Professional music label services and artist development"
    },
    {
      title: "Song Distribution",
      href: "/services/audio/song-distribution",
      icon: "🌐",
      description: "Global music distribution across all major platforms"
    },
    {
      title: "Music Production",
      href: "/services/audio/music-production",
      icon: "🎧",
      description: "Full-service music production and recording"
    },
    {
      title: "Recording Studio",
      href: "/services/audio/recording-studio",
      icon: "🎤",
      description: "State-of-the-art recording facilities and equipment"
    },
    {
      title: "On Set Sync Sound",
      href: "/services/audio/on-set-sync-sound",
      icon: "🎬",
      description: "Professional on-location sound recording and sync"
    }
  ];

  const videoServices = [
    {
      title: "Equipment Hiring",
      href: "/services/video/equipment-hiring",
      icon: "📹",
      description: "Professional video equipment rental and setup"
    },
    {
      title: "Video Shooting",
      href: "/services/video/video-shooting",
      icon: "🎥",
      description: "Complete video production and cinematography"
    },
    {
      title: "Artist Coordination",
      href: "/services/video/artist-coordination",
      icon: "👥",
      description: "Artist management and coordination services"
    },
    {
      title: "Locations",
      href: "/services/video/locations",
      icon: "📍",
      description: "Premium filming locations and venue coordination"
    },
    {
      title: "Editing & Post",
      href: "/services/video/editing-post",
      icon: "✂️",
      description: "Professional video editing and post-production"
    },
    {
      title: "Graphics & VFX",
      href: "/services/video/graphics-vfx",
      icon: "✨",
      description: "Motion graphics, visual effects, and animation"
    }
  ];

  return (
    <div className="services-page">
      <div className="services-header">
        <h1>Our Services</h1>
        <p>Comprehensive audio and video production services for all your creative needs</p>
      </div>

      <div className="services-sections">
        <section className="service-section">
          <h2>Audio Services</h2>
          <div className="services-grid">
            {audioServices.map((service, index) => (
              <Link to={service.href} key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="service-section">
          <h2>Video Services</h2>
          <div className="services-grid">
            {videoServices.map((service, index) => (
              <Link to={service.href} key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
