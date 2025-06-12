import React from 'react';
import './hero.css';
import heroImage from '../../assets/images/hero bg.jpg';

const Hero = () => (
  <section className="heroContainer">
    <img className="hero-bg-img" src={heroImage} alt="Hero" />
    <div className="heroOverlay" />
    <div className="heroContent">
      <h1>Music for the Next Generation</h1>
      <p>Discover, stream, and connect with the world’s best independent artists.</p>
      <a href="#explore" className="heroBtn">Explore Now</a>
    </div>
  </section>
);

export default Hero;
