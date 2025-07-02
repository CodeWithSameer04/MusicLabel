import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, ProductItem, ServiceItem, ButtonMenuItem } from "./ui/navbar-menu";
import ThemeToggle from "./ThemeToggle";
import { AnimatePresence, motion } from "framer-motion";
import "./Header.css";

const dropdownVariants = {
  hidden: { opacity: 0, y: 20, pointerEvents: "none" },
  visible: { opacity: 1, y: 0, pointerEvents: "auto", transition: { duration: 0.25 } },
  exit: { opacity: 0, y: 20, pointerEvents: "none", transition: { duration: 0.15 } }
};

const Header = () => {
  const [active, setActive] = useState(null);
  const [activeService, setActiveService] = useState(null);

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
            if (item === "Services") setActiveService(null);
          }}
          active={active}
          item="Services"
          href="/services"
        >
          <div
            className="services-centered-layout"
            onMouseLeave={() => setActiveService(null)}
          >
            {!activeService && (
              <div className="services-buttons-centered">
                <div
                  className="service-button-wrapper"
                  onMouseEnter={() => setActiveService("audio")}
                >
                  <Link to="/services/audio" className="service-link">
                    <button className="service-button">Audio Services</button>
                  </Link>
                </div>
                <div
                  className="service-button-wrapper"
                  onMouseEnter={() => setActiveService("video")}
                >
                  <Link to="/services/video" className="service-link">
                    <button className="service-button">Video Services</button>
                  </Link>
                </div>
              </div>
            )}

            <AnimatePresence>
              {activeService === "audio" && (
                <motion.div
                  key="audio"
                  className="service-category audio-services-window"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={dropdownVariants}
                  onMouseLeave={() => setActiveService(null)}
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
                </motion.div>
              )}
              {activeService === "video" && (
                <motion.div
                  key="video"
                  className="service-category video-services-window"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={dropdownVariants}
                  onMouseLeave={() => setActiveService(null)}
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
                </motion.div>
              )}
            </AnimatePresence>
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