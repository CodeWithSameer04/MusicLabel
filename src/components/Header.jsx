import React, { useState, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { MenuItem, Menu, ProductItem, ServiceItem, ButtonMenuItem } from "./ui/navbar-menu";
import ThemeToggle from "./ThemeToggle";
import "./Header.css";

const Header = () => {
  const [active, setActive] = useState(null);
  const [activeService, setActiveService] = useState(null);
  const hoverTimeoutRef = useRef(null);
  const leaveTimeoutRef = useRef(null);

  // Debounced hover handler to prevent jitter
  const handleServiceHover = useCallback((serviceType) => {
    // Clear any existing timeouts
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
    }

    // Set new hover with 0.1s delay for smoother experience
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveService(serviceType);
    }, 100);
  }, []);

  // Debounced leave handler
  const handleServiceLeave = useCallback(() => {
    // Clear hover timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    // Set leave timeout with 0.15s delay for smoother experience
    leaveTimeoutRef.current = setTimeout(() => {
      setActiveService(null);
    }, 150);
  }, []);

  // Handle mouse enter on entire dropdown to prevent flickering
  const handleDropdownEnter = useCallback(() => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
    }
  }, []);

  return (
    <div className="header-container">
      <Menu setActive={setActive}>
        {/* Home Link */}
        <Link to="/" className="nav-link">
          Home
        </Link>

        {/* About Link */}
        <Link to="/about" className="nav-link">
          About
        </Link>

        {/* Services Dropdown */}
        <ButtonMenuItem 
          setActive={(item) => {
            setActive(item);
            if (item === "Services") {
              setActiveService(null);
            }
          }} 
          active={active} 
          item="Services" 
          href="/services"
        >
          <div 
            className="services-centered-layout"
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleServiceLeave}
          >
            {!activeService && (
              <div className="services-buttons-centered">
                <div 
                  className="service-button-wrapper"
                  onMouseEnter={() => handleServiceHover('audio')}
                >
                  <Link to="/services/audio" className="service-link">
                    <button className="service-button">Audio Services</button>
                  </Link>
                </div>

                <div 
                  className="service-button-wrapper"
                  onMouseEnter={() => handleServiceHover('video')}
                >
                  <Link to="/services/video" className="service-link">
                    <button className="service-button">Video Services</button>
                  </Link>
                </div>
              </div>
            )}

            {activeService === 'audio' && (
              <div 
                className="service-category audio-services"
                onMouseEnter={handleDropdownEnter}
              >
                <h4 className="service-category-title">Audio Services</h4>
                <div className="services-grid-layout">
                  <ServiceItem
                    title="Music Label"
                    href="/services/audio/music-label"
                    icon="🎵"
                    description="Music label services and artist development"
                  />
                  <ServiceItem
                    title="Song Distribution"
                    href="/services/audio/song-distribution"
                    icon="🌐"
                    description="Global distribution"
                  />
                  <ServiceItem
                    title="Music Production"
                    href="/services/audio/music-production"
                    icon="🎧"
                    description="Full-service production and recording"
                  />
                  <ServiceItem
                    title="Recording Studio"
                    href="/services/audio/recording-studio"
                    icon="🎤"
                    description="Recording facilities and equipment"
                  />
                  <ServiceItem
                    title="On Set Sync Sound"
                    href="/services/audio/on-set-sync-sound"
                    icon="🎬"
                    description="On-location sound recording and sync"
                  />
                </div>
              </div>
            )}
          
            {activeService === 'video' && (
              <div 
                className="service-category video-services"
                onMouseEnter={handleDropdownEnter}
              >
                <h4 className="service-category-title">Video Services</h4>
                <div className="services-grid-layout">
                  <ServiceItem
                    title="Equipment Hiring"
                    href="/services/video/equipment-hiring"
                    icon="📹"
                    description="Equipment rental and setup"
                  />
                  <ServiceItem
                    title="Video Shooting"
                    href="/services/video/video-shooting"
                    icon="🎥"
                    description="Production and cinematography"
                  />
                  <ServiceItem
                    title="Artist Coordination"
                    href="/services/video/artist-coordination"
                    icon="👥"
                    description="Artist management"
                  />
                  <ServiceItem
                    title="Locations"
                    href="/services/video/locations"
                    icon="📍"
                    description="Filming locations and coordination"
                  />
                  <ServiceItem
                    title="Editing & Post"
                    href="/services/video/editing-post"
                    icon="✂️"
                    description="Editing and post-production"
                  />
                  <ServiceItem
                    title="Graphics & VFX"
                    href="/services/video/graphics-vfx"
                    icon="✨"
                    description="Motion graphics and VFX"
                  />
                </div>
              </div>
            )}
          </div>
        </ButtonMenuItem>

        {/* Products Dropdown */}
        <ButtonMenuItem setActive={setActive} active={active} item="Products" href="/products">
          <div className="products-simplified-grid">
            <ProductItem
              title="Artists"
              description="Meet our talented musicians and performers who bring creative visions to life"
              href="/artists"
              icon="🎤"
            />
            <ProductItem
              title="Albums"
              description="Featured albums and music releases showcasing our production quality"
              href="/albums"
              icon="💿"
            />
            <ProductItem
              title="Clients"
              description="Our valued clients and partnerships that drive our success"
              href="/clients"
              icon="🤝"
            />
          </div>
        </ButtonMenuItem>

        {/* Contacts Link */}
        <Link to="/contacts" className="nav-link">
          Contacts
        </Link>

        {/* FAQs Link */}
        <Link to="/faqs" className="nav-link">
          FAQs
        </Link>
        
        {/* Theme Toggle */}
        <ThemeToggle />
      </Menu>
    </div>
  );
};

export default Header;
