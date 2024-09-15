import React from 'react';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <li><a href="#about">About Me</a></li>
        <li><a href="#projects">My Projects</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>
    </div>
  );
}

export default NavBar;
