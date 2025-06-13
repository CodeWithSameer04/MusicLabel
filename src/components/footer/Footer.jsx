import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Music } from 'lucide-react';
import './footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-logo">RVM</div>
          <div className="footer-stack">
            <div className="footer-row">
              <a href="#company" className="footer-link">COMPANY</a>
              <a href="#faq" className="footer-link">FAQ</a>
              <div className="footer-socials">
                <a href="https://www.awal.com/" className="footer-link" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                {/* HREF ME DAAL DENGE BAADME FILHAL AWAL KI WEB DAALI HE */}
                <a href="#" className="footer-link" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
                <a href="#" className="footer-link" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="#" className="footer-link" aria-label="Spotify">
                  <Music size={20} />
                </a>
                <a href="#" className="footer-link" aria-label="YouTube">
                  <Youtube size={20} />
                </a>
                <a href="#" className="footer-link" aria-label="Music Platform">
                  <div style={{ fontSize: '20px', fontWeight: 'bold' }}>♪</div>
                </a>
              </div>
            </div>
            <div className="footer-bottom-row">
              <a href="#terms" className="footer-link">TERMS OF SERVICE</a>
              <a href="#privacy" className="footer-link">PRIVACY & COOKIE POLICY</a>
              <span className="footer-text">© 2025 RVM</span>
            </div>
          </div>
        </div>
        <div className="footer-right">
          <div 
            onClick={scrollToTop}
            className="back-to-top-link"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && scrollToTop()}
          >
            BACK TO TOP
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;