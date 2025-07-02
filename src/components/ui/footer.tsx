"use client";

import { Sun, Moon, ArrowUp, Heart } from "lucide-react";
// import { useTheme } from "../contexts/ThemeContext";

function handleScrollTop() {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
}

const Footer = () => {
  // const { toggleTheme, theme } = useTheme();

  const handleThemeSwitch = () => {
    // toggleTheme();
  };

  return (
    <div style={containerStyle}>
      <div style={buttonGroupStyle}>
        <button onClick={handleThemeSwitch} style={themeButtonStyle}>
          <Sun />
          <span style={srOnlyStyle}>Toggle Theme</span>
        </button>
        <button onClick={handleScrollTop} style={scrollButtonStyle}>
          <ArrowUp />
          <span style={srOnlyStyle}>Top</span>
        </button>
      </div>
    </div>
  );
};

import type { CSSProperties } from "react";

const containerStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '40px 20px',
  backgroundColor: '#f9f9f9',
};

const buttonGroupStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  borderRadius: '50px',
  border: '2px dotted #ccc',
  padding: '10px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
};

const themeButtonStyle: CSSProperties = {
  backgroundColor: '#333',
  color: '#fff',
  borderRadius: '25px',
  padding: '10px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};

const scrollButtonStyle: CSSProperties = {
  backgroundColor: 'transparent',
  color: '#333',
  padding: '10px',
  cursor: 'pointer',
};

const srOnlyStyle: CSSProperties = {
  position: 'absolute' as const,
  width: '1px',
  height: '1px',
  padding: '0',
  overflow: 'hidden',
  clip: 'rect(0,0,0,0)',
  whiteSpace: 'nowrap',
  border: '0',
};

const footerTextStyle: CSSProperties = {
  marginTop: '20px',
  fontSize: '14px',
  color: '#777',
};

const iconStyle: CSSProperties = {
  width: '16px',
  height: '16px',
  margin: '0 5px',
  color: 'red',
};

const linkStyle: CSSProperties = {
  color: '#007BFF',
  textDecoration: 'none',
};

export default Footer;
