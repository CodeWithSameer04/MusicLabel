import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className='navbar'>
        <button>Home</button>
        <button>About</button>
        <button>Services</button> 
        <button>Clients</button>
        <button>Albums</button>
        <button>Contacts</button>
        <button>FAQs</button>
      </nav>
    </header>
  );
}

export default Header;