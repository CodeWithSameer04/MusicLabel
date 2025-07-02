import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItem, Menu, ProductItem, ServiceItem, ButtonMenuItem } from "./ui/navbar-menu";
import ThemeToggle from "./ThemeToggle";
import "./Header.css";

const Header = () => {
  const [active, setActive] = useState(null);

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
        <ButtonMenuItem setActive={setActive} active={active} item="Services" href="/services">
          <div className="services-grid">
            <div className="service-category">
              <h4 className="service-category-title">Audio Services</h4>
              <ServiceItem
                title="Music Label"
                href="/services/audio/music-label"
                icon="🎵"
                description="Professional music label services and artist development"
              />
              <ServiceItem
                title="Song Distribution"
                href="/services/audio/song-distribution"
                icon="🌐"
                description="Global music distribution across all major platforms"
              />
              <ServiceItem
                title="Music Production"
                href="/services/audio/music-production"
                icon="🎧"
                description="Full-service music production and recording"
              />
              <ServiceItem
                title="Recording Studio"
                href="/services/audio/recording-studio"
                icon="🎤"
                description="State-of-the-art recording facilities and equipment"
              />
              <ServiceItem
                title="On Set Sync Sound"
                href="/services/audio/on-set-sync-sound"
                icon="🎬"
                description="Professional on-location sound recording and sync"
              />
            </div>
            
            <div className="service-category">
              <h4 className="service-category-title">Video Services</h4>
              <ServiceItem
                title="Equipment Hiring"
                href="/services/video/equipment-hiring"
                icon="📹"
                description="Professional video equipment rental and setup"
              />
              <ServiceItem
                title="Video Shooting"
                href="/services/video/video-shooting"
                icon="🎥"
                description="Complete video production and cinematography"
              />
              <ServiceItem
                title="Artist Coordination"
                href="/services/video/artist-coordination"
                icon="👥"
                description="Artist management and coordination services"
              />
              <ServiceItem
                title="Locations"
                href="/services/video/locations"
                icon="📍"
                description="Premium filming locations and venue coordination"
              />
              <ServiceItem
                title="Editing & Post"
                href="/services/video/editing-post"
                icon="✂️"
                description="Professional video editing and post-production"
              />
              <ServiceItem
                title="Graphics & VFX"
                href="/services/video/graphics-vfx"
                icon="✨"
                description="Motion graphics, visual effects, and animation"
              />
            </div>
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
