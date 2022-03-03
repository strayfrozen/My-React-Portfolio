import React from 'react';
import Navigation from '../Navigation';

import './Header.css';

function Header() {
  return (
    <header className="Header">
      <h1 className="name">Chris Langford</h1>
      <nav>
      <Navigation />
      </nav>
    </header>
  );
}

export default Header;