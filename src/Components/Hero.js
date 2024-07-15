import React, { useEffect, useState } from "react";
import hero4 from "../Assets/hero4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/Hero.css";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("https://forms.gle/156Swgva9xEMX8iP9");
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
          {/* <p className="text-headline">❤️ Health comes first</p> */}
          <h2 className="text-title">
            All Data Service Available
          </h2>
          <p className="text-descritpion">
          Datallation is a data solutions company with the ambitious goal of becoming the largest data service provider. We also aim to educate the younger generation about AI data. 
          </p>
          <a href="https://forms.gle/156Swgva9xEMX8iP9">
          <button
            className="text-appointment-btn"
            type="button"
            // onClick={handleBookAppointmentClick}
            
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Apply for job
          </button>
          </a>
          <div className="text-stats">
            <div className="text-stats-container">
              <p>1 Tera Byte +</p>
              <p>Data</p>
            </div>

            <div className="text-stats-container">
              <p>100+</p>
              <p>Data Workers</p>
            </div>

            <div className="text-stats-container">
              <p>4+</p>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={hero4} alt="Doctor" />
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
