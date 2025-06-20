import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeTab, setActiveTab] = useState('Audio');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);

  const services = {
    Audio: [
      'Music Label',
      'Song Distribution',
      'Music Production',
      'Recording Studio',
      'On Set Sync Sound'
    ],
    Video: [
      'Equipment Hiring',
      'Video Shooting',
      'Artist Coordination',
      'Locations',
      'Editing',
      'Graphics',
      'VFX'
    ]
  };

  const handleClickOutside = (event) => {
    if (headerRef.current && !headerRef.current.contains(event.target)) {
      setActiveDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="header" ref={headerRef}>
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <div className="logo-circle"></div>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            
            <div className="nav-link-container">
              <button
                className={`dropdown-toggle${activeDropdown === 'services' ? ' active' : ''}`}
                onClick={() => toggleDropdown('services')}
                onMouseEnter={() => setActiveDropdown('services')}
                tabIndex={0}
              >
                Services
              </button>
              
              {activeDropdown === 'services' && (
                <div 
                  className="dropdown-panel"
                  onMouseLeave={() => setActiveDropdown(null)}
                  style={{ opacity: 1 }}
                >
                  <div className="tab-buttons">
                    {Object.keys(services).map((tab) => (
                      <button
                        key={tab}
                        className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                        onMouseEnter={() => setActiveTab(tab)}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                  
                  <div className="dropdown-content">
                    <ul>
                      {services[activeTab].map((service, index) => (
                        <li key={index}>
                          <a href="#" onClick={(e) => e.preventDefault()}>
                            {service}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <Link to="/clients" className="nav-link">Clients</Link>
            <Link to="/albums" className="nav-link">Albums</Link>
            <Link to="/contacts" className="nav-link">Contacts</Link>
            <Link to="/faqs" className="nav-link">FAQs</Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu">
            <div className="mobile-menu-header">
              <div className="logo">
                <div className="logo-circle"></div>
              </div>
              <button className="close-btn" onClick={closeMobileMenu}>
                ×
              </button>
            </div>
            
            <nav className="mobile-nav-links">
              <Link to="/" className="mobile-nav-link" onClick={closeMobileMenu}>
                Home
              </Link>
              <Link to="/about" className="mobile-nav-link" onClick={closeMobileMenu}>
                About
              </Link>
              
              <div className="mobile-dropdown">
                <button 
                  className="mobile-dropdown-toggle "
                  onClick={() => toggleDropdown('mobile-services')}
                >
                  Services
                  <span className={`arrow ${activeDropdown === 'mobile-services' ? 'open' : ''}`}>
                    ▼
                  </span>
                </button>
                
                {activeDropdown === 'mobile-services' && (
                  <div className="mobile-dropdown-content">
                    {Object.entries(services).map(([category, items]) => (
                      <div key={category} className="mobile-service-category">
                        <h4>{category}</h4>
                        <ul>
                          {items.map((item, index) => (
                            <li key={index}>
                              <a href="#" onClick={(e) => e.preventDefault()}>
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <Link to="/clients" className="mobile-nav-link" onClick={closeMobileMenu}>
                Clients
              </Link>
              <Link to="/albums" className="mobile-nav-link" onClick={closeMobileMenu}>
                Albums
              </Link>
              <Link to="/contacts" className="mobile-nav-link" onClick={closeMobileMenu}>
                Contacts
              </Link>
              <Link to="/faqs" className="mobile-nav-link" onClick={closeMobileMenu}>
                FAQs
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;