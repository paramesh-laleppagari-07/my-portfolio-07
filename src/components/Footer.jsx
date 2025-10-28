import React from "react";
import "./Footer.css";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>Paramesh Laleppagari</h3>
          <p>Full Stack Developer</p>
        </div>
        <div className="footer-center">
          <p>📧 Email: <a href="mailto:paramesh.itcareers@gmail.com">paramesh.itcareers@gmail.com</a></p>
          <p>📞 Phone: <a href="tel:+917XXXXXXXX7">+91 7XXXXXXXXX7</a></p>
        </div>
        <div className="footer-right">
          <p>Connect with me:</p>
          <div className="social-links">
            <a href="https://linkedin.com/in/paramesh-laleppagari" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/paramesh-laleppagari-07" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Paramesh Laleppagari. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
