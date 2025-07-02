import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      className={`theme-toggle ${theme}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      <div className="theme-toggle-track">
        <div className="theme-option light">
          <div className="theme-text">
            <span className="theme-word">LIGHT</span>
            <span className="theme-word">MODE</span>
          </div>
        </div>
        <div className="theme-option dark">
          <div className="theme-text">
            <span className="theme-word">DARK</span>
            <span className="theme-word">MODE</span>
          </div>
        </div>
        <div className={`theme-slider ${theme}`}>
          <div className="theme-icon-container">
            {theme === 'light' ? (
              <Sun className="theme-icon" size={14} />
            ) : (
              <Moon className="theme-icon" size={14} />
            )}
          </div>
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
