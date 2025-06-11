import React from 'react';
import './Hero.css';
import heroImage from '../../assets/images/hero bg.jpg'; // Correct import
import { HeroStyle } from '../../assets/config/config'; // Importing HeroStyle if needed

const heroImages = [
  { img: heroImage }
  // Add more images if needed
];

const Hero = () => {
  return (
    <div className='heroContainer'>
      {heroImages.map((ele, idx) => (
        <img key={idx} src={ele.img} alt="" />
      ))}
    </div>
  );
};

export default Hero;
