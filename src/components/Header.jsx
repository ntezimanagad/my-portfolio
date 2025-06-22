import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <nav className="nav-container">
        <div className="logo">Ntezimana Gad</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
