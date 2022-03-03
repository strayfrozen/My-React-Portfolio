import React from 'react';
import './Navigation.css'

function Navigation() {

  return (
    <nav className="navbar">
        <a href="/" className="nav-link">About Me</a>
        <a href="/" className="nav-link">Portfolio</a>
        <a href="/" className="nav-link">Contact</a>
        <a href="/" className="nav-link">Resume</a>
    </nav>
  );
}

export default Navigation;
