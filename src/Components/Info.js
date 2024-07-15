import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faTooth } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
        At Datallation, we take pride in our distinctive approach to data services that sets us apart
from traditional data service providers. Unlike companies that rely on freelancers for their
work, we are dedicated to ensuring the highest level of data accuracy, transparency, and
accountability in every project we undertake
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Data Annotation"
          description="We specialize in providing top-notch data annotation services tailored to meet the diverse needs of various
           industries. Our comprehensive suite of data annotation solutions ensures high-quality, accurate, and efficient results,
            enabling our clients to build and train their AI and machine learning models effectively."
          // icon={faTruckMedical}
        />

        <InformationCard
          title="Data Collection"
          description="we understand that high-quality, diverse, and accurate data is the foundation of successful AI and 
          machine learning projects. Our data collection services are designed to provide you with the essential datasets 
          required to train and validate your models effectively. We specialize in gathering a wide range of data types to suit 
          various industry needs."
          // icon={faHeartPulse}
        />

        <InformationCard
          title="Translation"
          description=" we offer professional translation services in a wide range of languages, ensuring clear and accurate 
          communication across global markets. Our team of experienced translators is dedicated to providing high-quality 
          translations that preserve the original meaning and context, making your content accessible to a broader audience"
          // icon={faTooth}
        />
      </div>
    </div>
  );
}

export default Info;
