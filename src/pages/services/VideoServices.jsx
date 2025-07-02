import React from 'react';
import { Link } from 'react-router-dom';
import './VideoServices.css';

const VideoServices = () => {
  const videoServices = [
    {
      title: "Equipment Hiring",
      href: "/services/video/equipment-hiring",
      icon: "📹",
      description: "Professional video equipment rental and setup for all your production needs with latest technology."
    },
    {
      title: "Video Shooting",
      href: "/services/video/video-shooting",
      icon: "🎥",
      description: "Complete video production and cinematography services with experienced crew and creative direction."
    },
    {
      title: "Artist Coordination",
      href: "/services/video/artist-coordination",
      icon: "👥",
      description: "Professional artist management and coordination services for seamless production workflows."
    },
    {
      title: "Locations",
      href: "/services/video/locations",
      icon: "📍",
      description: "Premium filming locations and venue coordination services for the perfect setting."
    },
    {
      title: "Editing & Post",
      href: "/services/video/editing-post",
      icon: "✂️",
      description: "Professional video editing and post-production services with cutting-edge software and techniques."
    },
    {
      title: "Graphics & VFX",
      href: "/services/video/graphics-vfx",
      icon: "✨",
      description: "Motion graphics, visual effects, and animation services to enhance your video content."
    }
  ];

  return (
    <div className="video-services-page">
      <div className="video-services-header">
        <h1>Video Services</h1>
        <p>Comprehensive video production services from concept to completion with professional quality</p>
      </div>

      <div className="video-services-grid">
        {videoServices.map((service, index) => (
          <Link to={service.href} key={index} className="video-service-card">
            <div className="video-service-icon">{service.icon}</div>
            <div className="video-service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="video-service-arrow">→</div>
            </div>
          </Link>
        ))}
      </div>

      <div className="video-cta-section">
        <h2>Ready to Bring Your Video Vision to Life?</h2>
        <p>Contact us to discuss your video production requirements and get a professional quote.</p>
        <Link to="/contacts" className="video-cta-button">
          Start Your Project
        </Link>
      </div>
    </div>
  );
};

export default VideoServices;
