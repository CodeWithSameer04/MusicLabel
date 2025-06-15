import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';
import logo from '../../assets/images/apple-music.png';

function Header() {
  const navbarRef = useRef(null);
  const dropdownRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState('');
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        navbarRef.current.classList.toggle('scrolled', window.scrollY > 50);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener('resize', closeMenu);
    return () => window.removeEventListener('resize', closeMenu);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setActiveDropdown('');
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="header">
      <nav
        className={`navbar${menuOpen ? ' open' : ''} ${isHome ? 'navbar-home' : 'navbar-other'}`}
        ref={navbarRef}
        aria-label="Main navigation"
      >
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="MusicLabel Logo" className="logo-img" style={{ height: 40 }} />
          </Link>
        </div>

        <button
          className={`mobile-menu-btn${menuOpen ? ' open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-links${menuOpen ? ' show' : ''}`}>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>

          {/* Multi-Level Services Dropdown */}
          <div
            className="services-dropdown"
            ref={dropdownRef}
            onMouseEnter={() => setActiveDropdown('services')}
            onMouseLeave={() => setActiveDropdown('')}
            style={{ position: 'relative' }}
          >
            <span
              className={`services-link${location.pathname.startsWith('/services') ? ' active' : ''}`}
              style={{ cursor: 'pointer', padding: '8px 16px', display: 'inline-block' }}
              role="button"
              aria-haspopup="true"
              aria-expanded={activeDropdown === 'services'}
            >
              Services
            </span>

            <div className={`services-dropdown-menu${activeDropdown === 'services' ? ' active' : ''}`}>
              {/* Audios - with submenu */}
              <div
                className="dropdown-item"
                onMouseEnter={() => setActiveDropdown('audios')}
                onMouseLeave={() => setActiveDropdown('services')}
              >
                <Link to="/services/audios" onClick={() => setMenuOpen(false)}>
                  Audios
                </Link>
                <div className={`submenu${activeDropdown === 'audios' ? ' active' : ''}`}>
                  <Link to="/services/audios/music-labels" onClick={() => setMenuOpen(false)}>Music Labels</Link>
                  <Link to="/services/audios/song-distribution" onClick={() => setMenuOpen(false)}>Song Distribution</Link>
                  <Link to="/services/audios/music-production" onClick={() => setMenuOpen(false)}>Music Production</Link>
                  <Link to="/services/audios/recording-studio" onClick={() => setMenuOpen(false)}>Recording Studio</Link>
                  <Link to="/services/audios/onset-sync-song" onClick={() => setMenuOpen(false)}>Onset Sync Song</Link>
                </div>
              </div>

              {/* Videos - no submenu */}
              <div className="dropdown-item">
                <Link to="/services/videos" onClick={() => setMenuOpen(false)}>Videos</Link>
              </div>
            </div>
          </div>
          {/* End Services Dropdown */}

          <Link to="/clients" className={location.pathname === '/clients' ? 'active' : ''}>Clients</Link>
          <Link to="/albums" className={location.pathname === '/albums' ? 'active' : ''}>Albums</Link>
          <Link to="/contacts" className={location.pathname === '/contacts' ? 'active' : ''}>Contacts</Link>
          <Link to="/faqs" className={location.pathname === '/faqs' ? 'active' : ''}>FAQs</Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
