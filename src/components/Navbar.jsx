import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="left">
        <div className="logoCircle"></div>
        <span className="companyName">BenjCorp</span>
      </div>

      {/* Hamburger button (for smaller screen) */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <img src="MenuIcon.png" className="hamburgerIcon"></img>
      </div>

      {/* Navbar menu for bigger screens */}
      <div className="right desktopMenu">
        <a href="#">Menu 1</a>
        <a href="#">Menu 2</a>
        <a href="#">Menu 3</a>
        <button className="loginBtn">Login</button>
      </div>

      {/* Dropdown menu for smaller screens */}
      {menuOpen &&(
        <div className="dropdownMenu">
          <a href="#">Menu 1</a>
          <a href="#">Menu 2</a>
          <a href="#">Menu 3</a>
          <button className="loginBtn">Login</button>
        </div>
      )}

    </nav>


  );
}
