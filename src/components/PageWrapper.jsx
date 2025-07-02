import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const PageWrapper = ({ children }) => {
  const location = useLocation();
  const isHomepage = location.pathname === '/';

  return (
    <div className={`mainContainer${isHomepage ? ' homepage' : ''}`}>
      <Header />
      <div className="page-content">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default PageWrapper;