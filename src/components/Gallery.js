import React from "react";

// Components
import Swatch from "./Swatch";

// Stylesheet
import "../css/Gallery.scss";

const Gallery = props => {
  return (
    <div className={props.toggle ? "gallery show" : "gallery hide"}>
      <h1>{props.products[0].name}</h1>
    </div>
  );
};

export default Gallery;
