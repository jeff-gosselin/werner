import React from "react";

// Stylesheet
import "../css/Drawer.scss";

// This component goes inside the Drawer component
const ContactContent = () => {
  return (
    <div className="drawer-content">
      <div className="contact-content">
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message" />
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactContent;
