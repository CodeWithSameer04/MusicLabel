import { useLocation } from 'react-router-dom';
import React from 'react';

const Main = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <main style={{ paddingTop: isHome ? 0 : "55px" }}>
      {children}
    </main>
  );
};

export default Main;
