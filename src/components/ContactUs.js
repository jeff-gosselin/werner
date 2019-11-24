import React from "react";

// Component Imports
import ContactContent from "./ContactContent";

// Hooks
import useToggle from "../hooks/useToggle";

// React Icons
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

// Stylesheet
import "../css/ContactUs.scss";

const ContactUs = () => {
  const [expandContact, toggleExpandContact] = useToggle(false);
  return (
    <div className={expandContact ? "contact expand" : "contact"}>
      <button onClick={toggleExpandContact} className="contact-toggle">
        {expandContact ? <FaChevronDown /> : <FaChevronUp />}
      </button>
      <h2>Contact Us</h2>
      {expandContact ? <ContactContent /> : null}
    </div>
  );
};

export default ContactUs;
