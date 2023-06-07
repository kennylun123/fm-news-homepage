import React from "react";
import logo from "../assets/images/logo.svg";
import btnMenu from "../assets/images/icon-menu.svg";
import btnMenuClose from "../assets/images/icon-menu-close.svg";
import "../index.css";

export default function Navbar() {
  return (
    <header>
      <nav className="flex nav-bar">
        <img className="nav-logo" src={logo} alt="logo" />
        <ul className="flex nav-menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">New</a>
          </li>
          <li>
            <a href="#">Popular</a>
          </li>
          <li>
            <a href="#">Trending</a>
          </li>
          <li>
            <a href="#">Categories</a>
          </li>
        </ul>
        <button className="btn-menu">
          <img className="icon-menu" src={btnMenu} alt="btn-menu" />
          <img
            className="icon-menu-close"
            src={btnMenuClose}
            alt="btn-menu-close"
          />
        </button>
        <div className="background"></div>
      </nav>
    </header>
  );
}
