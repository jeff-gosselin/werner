import React from "react";

// React Icons
import { FaChevronUp } from "react-icons/fa";

// Stylesheet
import "../css/ContactUs.scss";

const ContactUs = () => {
  return (
    <div className="contact">
      <button className="contact-toggle">
        <FaChevronUp />
      </button>
      <h2>Contact Us</h2>
    </div>
  );
};

export default ContactUs;
