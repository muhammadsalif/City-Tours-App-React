import React from "react";
import logo from "../../logo.svg";
import "./navbar.scss";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="City Tours App." />
      </div>
      <div className="items">
        <ul className="nav-links">
          <li>
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="nav-link">
              about
            </a>
          </li>
          <li>
            <a href="/" className="nav-link active">
              tours
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
