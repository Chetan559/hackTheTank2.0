import React, { useEffect, useState } from "react";
import Heroimg from "../Assets/hero-img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../Styles/Hero.css";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">Journey of Passion & Excellence</p>
          <h2 className="text-title">EMPOWER YOUR SUCCESS WITH US</h2>
          <p className="text-descritpion">
            "Elevate Your Stitching Game with Unique & Trendy Styles"
          </p>
          <a href="http://127.0.0.1:5500/desgin/home.html">
            <button
              className="text-appointment-btn"
              type="button"
              onClick={handleBookAppointmentClick}
            >
              <FontAwesomeIcon icon={faCalendarCheck} /> Start Sweing Now...
            </button>
          </a>
          <a href="http://127.0.0.1:7000/">
            <button className="live-classes-btn" type="button">
              <FontAwesomeIcon icon={faCalendarCheck} /> Live Classes
            </button>
          </a>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={Heroimg} alt="Hero_img" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
