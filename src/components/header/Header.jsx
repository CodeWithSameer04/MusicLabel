// src/components/Header/Header.jsx
import React, { useState, useEffect, useRef } from 'react';
import './Header.css';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  
  // Services dropdown content
  const services = {
    audio: {
      title: "Audio",
      items: [
        "Music Label",
        "Song Distribution",
        "Music Production",
        "Recording Studio",
        "On Set Sync Sound"
      ]
    },
    video: {
      title: "Video",
      items: [
        "Equipment Hiring",
        "Video Shooting",
        "Artist Coordination",
        "Locations",
        "Editing",
        "Graphics",
        "VFX"
      ]
    }
  };

  const toggleMenu = (menuName) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  const closeAllMenus = () => {
    setActiveMenu(null);
  };

  const handleClickOutside = (e) => {
    if (navRef.current && !navRef.current.contains(e.target)) {
      closeAllMenus();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="header" ref={navRef}>
      <div className="nav-container">
        {/* Logo */}
        <div className="logo">
          <span className="logo-text">MUZIKK</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            <li className="nav-item">
              <a href="#home" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">About</a>
            </li>
            <li 
              className={`nav-item ${activeMenu === 'services' ? 'active' : ''}`}
              onMouseEnter={() => toggleMenu('services')}
              onClick={() => toggleMenu('services')}
            >
              <span className="nav-link">Services</span>
              {activeMenu === 'services' && (
                <div className="mega-menu">
                  <div className="menu-container">
                    <div className="menu-section">
                      <h3 className="section-title">Audio Services</h3>
                      <ul>
                        {services.audio.items.map((item, index) => (
                          <li key={index}><a href="#">{item}</a></li>
                        ))}
                      </ul>
                    </div>
                    <div className="menu-section">
                      <h3 className="section-title">Video Services</h3>
                      <ul>
                        {services.video.items.map((item, index) => (
                          <li key={index}><a href="#">{item}</a></li>
                        ))}
                      </ul>
                    </div>
                    <div className="menu-section">
                      <h3 className="section-title">Explore More</h3>
                      <ul>
                        <li><a href="#">Compare Services</a></li>
                        <li><a href="#">Shop Equipment</a></li>
                        <li><a href="#">Financing Options</a></li>
                        <li><a href="#">Artist Resources</a></li>
                      </ul>
                    </div>
                    <div className="menu-section">
                      <h3 className="section-title">Support</h3>
                      <ul>
                        <li><a href="#">Client Support</a></li>
                        <li><a href="#">Muzikk Care</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">iCloud for Artists</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li className="nav-item">
              <a href="#clients" className="nav-link">Clients</a>
            </li>
            <li className="nav-item">
              <a href="#albums" className="nav-link">Albums</a>
            </li>
            <li className="nav-item">
              <a href="#contacts" className="nav-link">Contacts</a>
            </li>
            <li className="nav-item">
              <a href="#faqs" className="nav-link">FAQs</a>
            </li>
          </ul>
        </nav>
        
        {/* Mobile Navigation */}
        <div className="mobile-nav">
          <button 
            className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-content">
            <div className="mobile-menu-header">
              <div className="logo">
                <span className="logo-text">MUZIKK</span>
              </div>
              <button 
                className="close-btn"
                onClick={() => setMobileMenuOpen(false)}
              >
                &times;
              </button>
            </div>
            
            <div className="mobile-menu-links">
              <a href="#home" className="mobile-link">Home</a>
              <a href="#about" className="mobile-link">About</a>
              
              <div className="mobile-dropdown">
                <div 
                  className="mobile-dropdown-header"
                  onClick={() => toggleMenu('mobile-services')}
                >
                  <span>Services</span>
                  <span>{activeMenu === 'mobile-services' ? '−' : '+'}</span>
                </div>
                {activeMenu === 'mobile-services' && (
                  <div className="mobile-dropdown-content">
                    <h4>Audio Services</h4>
                    {services.audio.items.map((item, index) => (
                      <a key={index} href="#" className="mobile-dropdown-item">{item}</a>
                    ))}
                    
                    <h4>Video Services</h4>
                    {services.video.items.map((item, index) => (
                      <a key={index} href="#" className="mobile-dropdown-item">{item}</a>
                    ))}
                  </div>
                )}
              </div>
              
              <a href="#clients" className="mobile-link">Clients</a>
              <a href="#albums" className="mobile-link">Albums</a>
              <a href="#contacts" className="mobile-link">Contacts</a>
              <a href="#faqs" className="mobile-link">FAQs</a>
            </div>
            
            <div className="mobile-menu-footer">
              <div className="mobile-menu-section">
                <h4>Explore More</h4>
                <a href="#">Artist Resources</a>
                <a href="#">Financing Options</a>
                <a href="#">Equipment Shop</a>
              </div>
              <div className="mobile-menu-section">
                <h4>Support</h4>
                <a href="#">Client Support</a>
                <a href="#">Muzikk Care</a>
                <a href="#">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;