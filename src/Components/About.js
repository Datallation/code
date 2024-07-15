import React from "react";
import hero from "../Assets/hero.jpg";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={hero} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
        Datallation is a data solutions company with the ambitious goal of becoming the largest data service provider. We also aim to educate the younger generation about AI data. 

We offer a wide range of services, including data collection, data tagging/labelling, data translation and interpretation, data annotation,audio collection, face extraction, emotions extraction,video annotation, SEO services, and survey provision.
        </p>

        {/* <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
          title="Choose a Specialist"
          description="Find your perfect specialist and book with ease at Health Plus. Expert doctors prioritize your health, offering tailored care."
        />

        <SolutionStep
          title="Make a Schedule"
          description="Choose the date and time that suits you best, and let our dedicated team of medical professionals ensure your well-being with personalized care."
        />

        <SolutionStep
          title="Get Your Solutions"
          description="Our experienced doctors and specialists are here to provide expert advice and personalized treatment plans, helping you achieve your best possible health."
        /> */}
      </div>
    </div>
  );
}

export default About;
