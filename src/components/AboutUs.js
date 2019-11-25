import React, { useEffect } from "react";

// Component Imports
import AboutContent from "./AboutContent";

// Hooks
import useToggle from "../hooks/useToggle";
import useAnimations from "../hooks/useAnimations";

// React Icons
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

// Stylesheets
import "../css/AboutUs.scss";
import "../css/ContactUs.scss";

const AboutUs = () => {
  const [expandAbout, toggleExpandAbout] = useToggle(false);
  const [animationEnabled, setAnimationEnabled] = useAnimations(false);

  useEffect(() => {
    return setAnimationEnabled;
  }, [expandAbout]);

  return (
    <div
      className={
        expandAbout
          ? "about expand"
          : animationEnabled
          ? "about contract"
          : "about"
      }
    >
      <button onClick={toggleExpandAbout} className="about-toggle">
        {expandAbout ? <FaChevronDown /> : <FaChevronUp />}
      </button>
      <h2>About Us</h2>
      {expandAbout ? <AboutContent /> : null}
    </div>
  );
};

export default AboutUs;
