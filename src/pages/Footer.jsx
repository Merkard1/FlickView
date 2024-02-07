import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="logo">
          <span>FLICKVIEW</span>
        </div>
        <div className="social-links">
          <Link
            className="social-link"
            to="https://www.facebook.com"
            target="_blank"
          >
            <FaFacebook />
          </Link>
          <Link
            className="social-link"
            to="https://www.twitter.com"
            target="_blank"
          >
            <FaTwitter />
          </Link>
          <Link
            className="social-link"
            to="https://www.instagram.com"
            target="_blank"
          >
            <FaInstagram />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
