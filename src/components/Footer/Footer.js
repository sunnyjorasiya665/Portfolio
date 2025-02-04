import React from "react";
import logo from "../../assets/logo.jpeg";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src={logo} alt="logo" />
      </div>

      {/* copyright */}
      <div className="footer-cpyright">
        <p>© 2025 Sunny Jorasiya. All Right reserved</p>
      </div>
      {/* social */}
      <ul className="footer-social-media">
        <li>
          <a href="https://github.com/sunnyjorasiya665/">
            <i class="fa-brands fa-square-github"></i>
          </a>
        </li>
        <li>
          <a href="mailto:sjorasiya665@gmail.com?subject=For Contacting for Website Development">
            <i class="fa-solid fa-envelope"></i>
          </a>
        </li>
        <li>
          <a href="tel:+91-8053854156">
            <i
              className="fa-solid fa-square-phone"
              // style={{ color: "#5332f5" }}
            ></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/sunny-jorasiya/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
