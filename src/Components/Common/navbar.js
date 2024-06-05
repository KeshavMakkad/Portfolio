import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
/>;

function Navbar() {
  return (
    <nav className="nav-bar">
      <h1 className="logo-header">
        <Link to="/">
          <img src="https://via.placeholder.com/150" alt="Logo" />
        </Link>
      </h1>
      <div className="nav-links-container">
        <Link to="/" className="link-container">
          <span className="material-symbols-outlined link-element">home</span>
          <span className="link-element">Home</span>
        </Link>
        <Link to="/about" className="link-container">
          <span className="material-symbols-outlined link-element">person</span>
          <span className="link-element">About Me</span>
        </Link>
        <Link to="/projects" className="link-container">
          <span className="material-symbols-outlined link-element">
            laptop_mac
          </span>
          <span className="link-element">Projects</span>
        </Link>
        <Link to="/resume" className="link-container">
          <span className="material-symbols-outlined link-element">
            article
          </span>
          <span className="link-element">Resume</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
