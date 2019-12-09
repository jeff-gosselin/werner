import React, { useState } from "react";
import GalleryNav from "./GalleryNav";

// Components
import Swatch from "./Swatch";

// Stylesheet
import "../css/Gallery.scss";

const Gallery = props => {
  console.log("Props", props.products);

  let ceramics = props.products.filter(product => product.type === "ceramic");
  let stones = props.products.filter(product => product.type === "stone");
  let woods = props.products.filter(product => product.type === "wood");

  const { floorType, setFloorType } = useState("");

  return (
    <div className={props.toggle ? "gallery show" : "gallery hide"}>
      <GalleryNav />
      <h1>{props.products[0].name}</h1>
    </div>
  );
};

export default Gallery;
