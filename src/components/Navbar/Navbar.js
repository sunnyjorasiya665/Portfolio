import React from "react";
import logo from "../../assets/logo.jpeg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Portfolio</a>
          </li>
          <li>
            <a href="mailto:sjorasiya665@gmail.com?subject=For Contacting for Website Development">
              Contact Me
              <i class="fa-solid fa-envelope"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
