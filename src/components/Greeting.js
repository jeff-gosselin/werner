import React from "react";

// Stylesheet
import "../css/Greeting.scss";

const Greeting = props => {
  return (
    <div id="greeting" className={props.toggle ? null : "greeting-fade-in"}>
      <h1>Bringing more to your wall or floor!</h1>
      <p>
        Take a look at our wide selection of flooring. We have everything from
        ceramic tiles to wooden panels, and much much more.
      </p>
      <button onClick={props.toggleExpand}>Explore</button>
    </div>
  );
};

export default Greeting;
