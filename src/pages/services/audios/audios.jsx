import React from 'react';
import '../../pages.css';

function AudioServices() {
  const audioServices = [
    {
      title: "Music Production",
      icon: "🎵",
      description: "Complete song production from concept to finished track",
      features: [
        "Pre-production consultation",
        "Professional recording",
        "Arrangement & composition",
        "Live instrumentation",
        "Vocal production",
        "Sound design"
      ],
      price: "Starting at $500",
      timeline: "1-2 weeks"
    },
    {
      title: "Mixing & Mastering",
      icon: "🎛️",
      description: "Professional mixing and mastering for radio-ready sound",
      features: [
        "Professional mixing",
        "Stereo mastering",
        "Stem mastering",
        "Vinyl mastering",
        "Streaming optimization",
        "Unlimited revisions"
      ],
      price: "Starting at $200",
      timeline: "3-5 days"
    },
    {
      title: "Audio Editing",
      icon: "✂️",
      description: "Professional audio editing and restoration services",
      features: [
        "Vocal tuning & timing",
        "Audio restoration",
        "Noise removal",
        "Podcast editing",
        "Audio cleanup",
        "Format conversion"
      ],
      price: "Starting at $100",
      timeline: "1-3 days"
    },
    {
      title: "Beat Making",
      icon: "🥁",
      description: "Custom beats and instrumental tracks for your projects",
      features: [
        "Custom beat production",
        "Genre specialization",
        "Stem separation",
        "Commercial licensing",
        "Exclusive rights option",
        "Multiple variations"
      ],
      price: "Starting at $150",
      timeline: "2-5 days"
    },
    {
      title: "Voiceover Production",
      icon: "🎙️",
      description: "Professional voiceover recording and production",
      features: [
        "Studio recording",
        "Voice coaching",
        "Multiple takes",
        "Background music",
        "Sound effects",
        "Final mixing"
      ],
      price: "Starting at $250",
      timeline: "1-2 days"
    },
    {
      title: "Audio Branding",
      icon: "🔊",
      description: "Custom audio logos and brand sound design",
      features: [
        "Audio logos",
        "Brand jingles",
        "Sonic identity",
        "Commercial use rights",
        "Multiple formats",
        "Brand guidelines"
      ],
      price: "Starting at $400",
      timeline: "1 week"
    }
  ];

  const processes = [
    {
      step: "01",
      title: "Consultation",
      description: "We discuss your vision, goals, and requirements"
    },
    {
      step: "02",
      title: "Planning",
      description: "We create a detailed plan and timeline for your project"
    },
    {
      step: "03",
      title: "Production",
      description: "Our team works on your project with regular updates"
    },
    {
      step: "04",
      title: "Review",
      description: "You review the work and request any revisions"
    },
    {
      step: "05",
      title: "Delivery",
      description: "Final files delivered in your preferred format"
    }
  ];

  return (
    <div className='audio-services'>
      <h1>Audio Services</h1>
      <span className="audio-highlight">Professional Audio Production & Engineering</span>
      
      <div className="audio-intro">
        <p>
          From music production to audio branding, our comprehensive audio services 
          cover every aspect of sound creation and engineering. Our state-of-the-art 
          studio and experienced team deliver professional results that meet industry standards.
        </p>
      </div>

      <div className="services-grid">
        {audioServices.map((service, index) => (
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

      <div className="process-section">
        <h2>Our Process</h2>
        <p>Here's how we work with you to create exceptional audio content:</p>
        
        <div className="process-steps">
          {processes.map((process, index) => (
            <div key={index} className="process-step">
              <div className="step-number">{process.step}</div>
              <h3>{process.title}</h3>
              <p>{process.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="audio-cta">
        <h2>Ready to Start Your Audio Project?</h2>
        <p>
          Whether you need a single song mixed or a full album produced, 
          we're here to bring your audio vision to life with professional quality and creativity.
        </p>
        <div className="cta-buttons">
          <button className="cta-primary">Get Started</button>
          <button className="cta-secondary">View Portfolio</button>
        </div>
      </div>
    </div>
  );
}

export default AudioServices;
