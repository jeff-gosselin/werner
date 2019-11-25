import React, { useEffect } from "react";

// Component Imports
import ContactContent from "./ContactContent";

// Hooks
import useToggle from "../hooks/useToggle";
import useAnimations from "../hooks/useAnimations";

// React Icons
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

// Stylesheet
import "../css/ContactUs.scss";

const ContactUs = () => {
  const [expandContact, toggleExpandContact] = useToggle(false);
  const [animationEnabled, setAnimationEnabled] = useAnimations(false);
  console.log("expandContact: ", expandContact);
  console.log("animationEnabled: ", animationEnabled);

  useEffect(() => {
    return setAnimationEnabled;
  }, [expandContact]);

  return (
    <div
      className={
        expandContact
          ? "contact expand"
          : animationEnabled
          ? "contact contract"
          : "contact"
      }
    >
      <button onClick={toggleExpandContact} className="contact-toggle">
        {expandContact ? <FaChevronDown /> : <FaChevronUp />}
      </button>
      <h2>Contact Us</h2>
      {expandContact ? <ContactContent /> : null}
    </div>
  );
};

export default ContactUs;
