import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/images/apple-music.png';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        </li>
        <li>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
        </li>
        <li>
          <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link>
        </li>
        <li>
          <Link to="/services/audio" className={location.pathname === '/services/audio' ? 'active' : ''}>Audios</Link>
        </li>
        <li>
          <Link to="/services/video" className={location.pathname === '/services/video' ? 'active' : ''}>Videos</Link>
        </li>
        <li>
          <Link to="/clients" className={location.pathname === '/clients' ? 'active' : ''}>Clients</Link>
        </li>
        <li>
          <Link to="/albums" className={location.pathname === '/albums' ? 'active' : ''}>Albums</Link>
        </li>
        <li>
          <Link to="/contacts" className={location.pathname === '/contacts' ? 'active' : ''}>Contacts</Link>
        </li>
        <li>
          <Link to="/faqs" className={location.pathname === '/faqs' ? 'active' : ''}>FAQs</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;