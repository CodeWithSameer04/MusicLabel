import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

const Products = () => {
  const products = [
    {
      title: "Artists",
      description: "Meet our talented musicians and performers who bring creative visions to life",
      href: "/artists",
      icon: "🎤",
      features: [
        "Diverse talent pool",
        "Professional performers",
        "Collaborative artists",
        "Experienced musicians"
      ]
    },
    {
      title: "Clients", 
      description: "Our valued clients and partnerships that drive our success",
      href: "/clients",
      icon: "🤝",
      features: [
        "Industry leaders",
        "Creative agencies",
        "Production companies",
        "Independent creators"
      ]
    },
    {
      title: "Albums",
      description: "Featured albums and music releases showcasing our production quality",
      href: "/albums",
      icon: "💿",
      features: [
        "Original compositions",
        "Professional production",
        "Multiple genres",
        "Award-winning releases"
      ]
    }
  ];

  return (
    <div className="products-page">
      <div className="products-header">
        <h1>Our Products</h1>
        <p>Discover our creative offerings and explore the talent and content that defines our brand</p>
      </div>

      <div className="products-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <div className="product-icon">{product.icon}</div>
            <div className="product-content">
              <h3>{product.title}</h3>
              <p className="product-description">{product.description}</p>
              
              <ul className="product-features">
                {product.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              
              <Link to={product.href} className="product-link">
                Explore {product.title}
                <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="cta-section">
        <h2>Ready to Work With Us?</h2>
        <p>Get in touch to discuss your project and see how our products can help bring your vision to life.</p>
        <Link to="/contacts" className="cta-button">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Products;
