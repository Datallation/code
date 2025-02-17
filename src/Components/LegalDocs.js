import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">
          {/* Health <span className="legal-siteSign">+</span> */}
          DATALLATION
        </Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">General Info</p>
        <p className="legal-description">
          Welcome to Datallation, your trusted online Data platform. Datallation is a data solution company with the 
          ambitious goal of becoming the largest data service provider. We also aim to educate the younger generation about AI
           data.
        </p>

        <p className="legal-title">Privacy Policy</p>
        <p className="legal-description">
          Your privacy is paramount to us. Our Privacy Policy outlines how we
          collect, use, and protect your personal data. We
          ensure secure data handling, and you can trust that your information
          is treated with the utmost confidentiality.
        </p>

        <p className="legal-title">Terms of Service</p>
        <p className="legal-description">
          When using datallation, you agree to our Terms of Service. This
          includes guidelines for using our platform, interacting with employees,
          and the responsibilities of both parties. It's essential to understand
          these terms to ensure a smooth experience for all users.
        </p>

        {/* <p className="legal-title">Consultations</p>
        <p className="legal-description">
          Our platform connects you with expert doctors who provide online
          consultations. These consultations are not a replacement for in-person
          medical visits but serve as a convenient option for medical advice,
          prescriptions, and guidance. It's crucial to provide accurate and
          complete information to receive the best possible care.
        </p> */}

        <p className="legal-title">How it Works</p>
        <p className="legal-description">
        Datallation is a data solutions company with the ambitious goal of becoming the largest data service provider.
         We also aim to educate the younger generation about AI data. We offer a wide range of services, including data collection, 
         data tagging/labelling, data translation and interpretation, data annotation,audio collection, face extraction, emotions 
         extraction,video annotation, SEO services, and survey provision.
        </p>
      </div>

      <div className="legal-footer">
        <p>© Datallation. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LegalDocs;
