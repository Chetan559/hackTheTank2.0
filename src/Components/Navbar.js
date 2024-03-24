import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/">
          <img
            id="logo"
            src="https://diy-assets.classplus.co/_next/image?url=https://ali-cdn-diy-public.classplus.co/prod/2_1699159409371.png&w=1920&q=75"
          />
        </Link>
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <Link to="/" className="navbar-links">
            Home
          </Link>
        </li>
        <li>
          <a href="#about" className="navbar-links">
            About
          </a>
        </li>
        <li>
          <a
            href="http://127.0.0.1:5500/desgin/home.html"
            className="navbar-links"
          >
            Courses
          </a>
        </li>
        <li>
          <a href="#reviews" className="navbar-links">
            Reviews
          </a>
        </li>
        <li>
          <a href="#Footer" className="navbar-links">
            Contact Us
          </a>
        </li>
        <li>
          <a href="#members" className="navbar-links">
            Our Team
          </a>
        </li>
        <li>
          <a
            href="http://127.0.0.1:5500/Chatbot/frontend/chatbot.html"
            className="navbar-links"
          >
            Chatbot
          </a>
        </li>
      </ul>
      <a href="http://127.0.0.1:5500/CommunityForum/templates/index.html">
        <button className="navbar-btn" type="button">
          <FontAwesomeIcon icon={faCommentDots} /> Community Forum
        </button>
      </a>

      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <Link onClick={openNav} to="/">
              Home
            </Link>
          </li>
          <li>
            <a href="#about" className="navbar-links">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="navbar-links">
              Courses
            </a>
          </li>
          <li>
            <a href="#reviews" className="navbar-links">
              Reviews
            </a>
          </li>
          <li>
            <a href="#doctors" className="navbar-links">
              Contact Us
            </a>
          </li>
          <li>
            <a href="#doctors" className="navbar-links">
              Our Team
            </a>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>
    </div>
  );
}

export default Navbar;
