import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';

const PageWrapper = ({ children }) => {
  const location = useLocation();
  const isHomepage = location.pathname === '/';

  return (
    <div className={`mainContainer${isHomepage ? ' homepage' : ''}`}>
      <Header />
      <div className="page-content">
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;