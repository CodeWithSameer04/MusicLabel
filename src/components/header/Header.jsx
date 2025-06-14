import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';
import logo from '../../assets/images/apple-music.png';

function Header() {
  const navbarRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const location = useLocation();

  // Glassy scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (!navbarRef.current) return;
      if (window.scrollY > 50) {
        navbarRef.current.classList.add('scrolled');
      } else {
        navbarRef.current.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize or route change
  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener('resize', closeMenu);
    return () => window.removeEventListener('resize', closeMenu);
  }, []);
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Determine if on home page
  const isHome = location.pathname === '/';

  // Close dropdown on route change
  useEffect(() => {
    setServicesDropdown(false);
  }, [location.pathname]);

  return (
    <div className="header">
      <nav
        className={`navbar${menuOpen ? ' open' : ''} ${isHome ? 'navbar-home' : 'navbar-other'}`}
        ref={navbarRef}
        aria-label="Main navigation"
      >
        <div className="nav-logo">
          <Link to="/">
            <img
              src={logo}
              alt="MusicLabel Logo"
              className="logo-img"
              style={{ height: 40 }}
            />
          </Link>
        </div>
        <button
          className={`mobile-menu-btn${menuOpen ? ' open' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <div className={`nav-links${menuOpen ? ' show' : ''}`}>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={() => setMenuOpen(false)}>About</Link>
          {/* Services Dropdown */}
          <div
            className="services-dropdown"
            onMouseEnter={() => setServicesDropdown(true)}
            onMouseLeave={() => setServicesDropdown(false)}
            tabIndex={0}
            onFocus={() => setServicesDropdown(true)}
            onBlur={() => setServicesDropdown(false)}
            style={{ position: 'relative' }}
          >
            <span
              className={`services-link${location.pathname.startsWith('/services') ? ' active' : ''}`}
              onClick={() => setServicesDropdown((open) => !open)}
              style={{ cursor: 'pointer', padding: '8px 16px', display: 'inline-block' }}
            >
              Services
            </span>
            <div className={`services-dropdown-menu${servicesDropdown ? ' active' : ''}`}>
              <Link to="/services" onClick={() => { setMenuOpen(false); setServicesDropdown(false); }}>All Services</Link>
              <Link to="/services/audio" onClick={() => { setMenuOpen(false); setServicesDropdown(false); }}>Audio</Link>
              <Link to="/services/video" onClick={() => { setMenuOpen(false); setServicesDropdown(false); }}>Video</Link>
            </div>
          </div>
          {/* End Services Dropdown */}
          <Link to="/clients" className={location.pathname === '/clients' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Clients</Link>
          <Link to="/albums" className={location.pathname === '/albums' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Albums</Link>
          <Link to="/contacts" className={location.pathname === '/contacts' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Contacts</Link>
          <Link to="/faqs" className={location.pathname === '/faqs' ? 'active' : ''} onClick={() => setMenuOpen(false)}>FAQs</Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;