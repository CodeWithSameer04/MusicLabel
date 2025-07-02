import React from 'react';
import '../../pages.css';

function VideoServices() {
  const videoServices = [
    {
      title: "Music Videos",
      icon: "🎥",
      description: "Professional music video production from concept to final cut",
      features: [
        "Creative concept development",
        "Professional cinematography",
        "Multi-camera setups",
        "Professional lighting",
        "Color grading & editing",
        "Motion graphics"
      ],
      price: "Starting at $2,000",
      timeline: "2-4 weeks"
    },
    {
      title: "Live Performance Videos",
      icon: "🎬",
      description: "Capture your live performances with professional quality",
      features: [
        "Multi-camera recording",
        "Professional audio sync",
        "Live sound mixing",
        "Dynamic editing",
        "Audience capture",
        "Quick turnaround"
      ],
      price: "Starting at $800",
      timeline: "1-2 weeks"
    },
    {
      title: "Lyric Videos",
      icon: "📝",
      description: "Engaging lyric videos with creative typography and visuals",
      features: [
        "Creative typography",
        "Animated text effects",
        "Background visuals",
        "Brand integration",
        "Multiple formats",
        "Social media versions"
      ],
      price: "Starting at $500",
      timeline: "1 week"
    },
    {
      title: "Behind-the-Scenes",
      icon: "🎞️",
      description: "Document your creative process and studio sessions",
      features: [
        "Studio documentation",
        "Interview segments",
        "Process storytelling",
        "Candid moments",
        "Social media content",
        "Extended cuts"
      ],
      price: "Starting at $600",
      timeline: "1-2 weeks"
    },
    {
      title: "Promotional Videos",
      icon: "📣",
      description: "Marketing videos for releases, tours, and announcements",
      features: [
        "Marketing focus",
        "Brand alignment",
        "Call-to-action integration",
        "Multiple versions",
        "Platform optimization",
        "Analytics tracking"
      ],
      price: "Starting at $400",
      timeline: "3-5 days"
    },
    {
      title: "Video Editing",
      icon: "✂️",
      description: "Professional editing for your existing video footage",
      features: [
        "Professional editing",
        "Color correction",
        "Audio sync & mixing",
        "Effects & transitions",
        "Title graphics",
        "Export optimization"
      ],
      price: "Starting at $300",
      timeline: "3-7 days"
    }
  ];

  const equipment = [
    {
      category: "Cameras",
      items: ["RED Cinema Cameras", "Sony FX6", "Canon R5", "Blackmagic"],
      icon: "📷"
    },
    {
      category: "Lighting",
      items: ["ARRI LED Panels", "Aputure Lights", "Professional Grip", "Color Gels"],
      icon: "💡"
    },
    {
      category: "Audio",
      items: ["Wireless Mic Systems", "Boom Operators", "Audio Recorders", "Sync Equipment"],
      icon: "🎙️"
    },
    {
      category: "Support",
      items: ["Steadicam", "Drone Operations", "Slider & Jibs", "Tripod Systems"],
      icon: "🎢"
    }
  ];

  const portfolio = [
    {
      title: "\"Midnight Dreams\" - Alex Rivera",
      type: "Music Video",
      description: "Cinematic music video with 500K+ views",
      stats: "500K+ Views"
    },
    {
      title: "Live at The Venue - The Midnight Collective",
      type: "Live Performance",
      description: "Multi-camera live session recording",
      stats: "200K+ Views"
    },
    {
      title: "\"Echoes\" Lyric Video - Luna Santos",
      type: "Lyric Video",
      description: "Animated typography with visual effects",
      stats: "150K+ Views"
    },
    {
      title: "Studio Sessions - Neon Dreams",
      type: "Behind-the-Scenes",
      description: "Documentary-style studio footage",
      stats: "75K+ Views"
    }
  ];

  return (
    <div className='video-services'>
      <h1>Video Production Services</h1>
      <span className="video-highlight">Cinematic Visual Storytelling</span>
      
      <div className="video-intro">
        <p>
          Bring your music to life with professional video production. From concept to final cut, 
          our experienced team creates compelling visual content that amplifies your artistic vision 
          and connects with your audience.
        </p>
      </div>

      <div className="services-grid">
        {videoServices.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p className="service-description">{service.description}</p>
            
            <div className="service-features">
              <h4>What's Included:</h4>
              <ul>
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="service-details">
              <div className="service-price">{service.price}</div>
              <div className="service-timeline">{service.timeline}</div>
            </div>
            
            <button className="service-btn">Get Quote</button>
          </div>
        ))}
      </div>

      <div className="equipment-section">
        <h2>Professional Equipment</h2>
        <p>We use industry-standard equipment to ensure the highest quality results:</p>
        
        <div className="equipment-grid">
          {equipment.map((category, index) => (
            <div key={index} className="equipment-category">
              <div className="equipment-icon">{category.icon}</div>
              <h3>{category.category}</h3>
              <ul>
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="portfolio-section">
        <h2>Recent Work</h2>
        <p>Check out some of our recent video productions:</p>
        
        <div className="portfolio-grid">
          {portfolio.map((project, index) => (
            <div key={index} className="portfolio-item">
              <div className="portfolio-type">{project.type}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="portfolio-stats">{project.stats}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="video-cta">
        <h2>Ready to Create Your Video?</h2>
        <p>
          Let's discuss your vision and create a video that showcases your music 
          and connects with your audience. From concept to distribution, we've got you covered.
        </p>
        <div className="cta-buttons">
          <button className="cta-primary">Start Your Project</button>
          <button className="cta-secondary">View Full Portfolio</button>
        </div>
      </div>
    </div>
  );
}

export default VideoServices;
