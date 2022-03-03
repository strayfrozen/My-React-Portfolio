import React from 'react';
import Navigation from '../Navigation';

import './Header.css';

function Header() {
  return (
    <header>
      <h1 id="Header">Chris Langford</h1>
      <nav>
      <Navigation />
      </nav>
    </header>
  );
}

export default Header;