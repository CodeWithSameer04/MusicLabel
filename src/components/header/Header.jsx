import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';

function Header() {
  const navbarRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
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

  return (
    <div className="header">
      <nav
        className={`navbar${menuOpen ? ' open' : ''}`}
        ref={navbarRef}
        aria-label="Main navigation"
      >
        <div className="nav-logo">
          <span>logo daalo idhar
          </span>
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