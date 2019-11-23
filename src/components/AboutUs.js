import React from "react";

// React Icons
import { FaChevronUp } from "react-icons/fa";

// Stylesheet
import "../css/AboutUs.scss";

const AboutUs = () => {
  return (
    <div className="about">
      <button className="about-toggle">
        <FaChevronUp />
      </button>
      <h2>About Us</h2>
    </div>
  );
};

export default AboutUs;
