import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';
import logo from '../../assets/images/apple-music.png';

function Header() {
  const navbarRef = useRef(null);
  const dropdownRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
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

  // Determine if on home page
  const isHome = location.pathname === '/';

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
          <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/services" className={location.pathname === '/services' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/services/audio" className={location.pathname === '/services/audio' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Audios</Link>
          <Link to="/services/video" className={location.pathname === '/services/video' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Videos</Link>
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
