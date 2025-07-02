import React, { useState, useEffect } from 'react';
import './Hero.css';
import heroImage1 from '../../assets/images/Untitled-1.png';
import heroImage2 from '../../assets/images/1.jpg';
import heroImage3 from '../../assets/images/2.jpg';
import heroImage4 from '../../assets/images/3.jpg';
import heroImage5 from '../../assets/images/4.jpg';
import heroImage6 from '../../assets/images/5.jpg';

const Hero = () => {
  const images = [
    { src: heroImage1, alt: 'Hero Image 1' },
    { src: heroImage2, alt: 'Hero Image 2' },
    { src: heroImage3, alt: 'Hero Image 3' },
    { src: heroImage4, alt: 'Hero Image 4' },
    { src: heroImage5, alt: 'Hero Image 5' },
    { src: heroImage6, alt: 'Hero Image 6' }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-change images every 25 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // 25 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    // Pause auto-play temporarily when user manually navigates
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume after 10 seconds
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    // Pause auto-play temporarily when user manually navigates
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume after 10 seconds
  };


  return (
    <section className="heroContainer">
      {images.map((image, index) => (
        <img 
          key={index}
          className={`hero-bg-img ${index === currentImageIndex ? 'active' : ''}`}
          src={image.src} 
          alt={image.alt}
        />
      ))}
      
      <div className="heroOverlay" />
      
      {/* Navigation Controls */}
      <div className="hero-controls">
        <button className="hero-nav-btn prev" onClick={goToPrevious}>
          ❮
        </button>
        <button className="hero-nav-btn next" onClick={goToNext}>
          ❯
        </button>
      </div>
      
      <div className="heroContent">
        <h1>Music for the Next Generation</h1>
        <p>Discover, stream, and connect with the world's best independent artists.</p>
        <a href="#explore" className="heroBtn">Explore Now</a>
      </div>
    </section>
  );
};

export default Hero;
