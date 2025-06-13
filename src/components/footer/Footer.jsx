import React, { useState, useEffect } from 'react';
import './footer.css';

function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <h3 className="footer-logo">RVM</h3>
          </div>

          <div className="footer-center">
            <div className="footer-links">
              <a href="#company" className="footer-link">Company</a>
              <a href="#faq" className="footer-link">FAQ</a>
              <a href="#facebook" className="footer-link">F</a>
              <a href="#instagram" className="footer-link">I</a>
              <a href="#spotify" className="footer-link">S</a>
              <a href="#youtube" className="footer-link">Y</a>
              <a href="#music" className="footer-link">M</a>
            </div>

            <div className="footer-bottom-links">
              <a href="#terms" className="footer-link">Terms of Service</a>
              <a href="#privacy" className="footer-link">Privacy & Cookie Policy</a>
              <span className="footer-text">© 2025 RVM</span>
            </div>
          </div>

          <div className="footer-right">
            {showBackToTop && ( 
              <span onClick={scrollToTop} className="back-to-top-link" role="button" tabIndex={0}>
                BACK TO TOP
              </span>
            )}
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
