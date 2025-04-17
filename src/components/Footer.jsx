import React from "react";
import Instagram from "../assets/instagram.png"
import Logo2 from '../assets/logoPrincipal.png'
import "../css/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={Logo2} alt="" />
        </div>
      <div className="footer-right">
        <a
          href="https://instagram.com/eduardagiendruczak"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <img
            src={Instagram}
            alt="Instagram"
            className="social-icon"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
