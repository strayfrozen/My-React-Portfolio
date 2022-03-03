import React from 'react';
import './Navigation.css'

function Navigation() {

  return (
    <nav className="navbar">
        <h2 className='nav-link'>About Me</h2>
        <h2 className='nav-link'>Portfolio</h2>
        <h2 className='nav-link'>Contact</h2>
        <h2 className='nav-link'>Resume</h2>
    </nav>
  );
}

export default Navigation;