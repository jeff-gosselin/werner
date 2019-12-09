import React from "react";
import GalleryNav from "./GalleryNav";

// Components
import Swatch from "./Swatch";

// Stylesheet
import "../css/Gallery.scss";

const Gallery = props => {
  console.log("Props", props.products);

  let ceramics = props.products.filter(product => product.type === "ceramic");
  let stone = props.products.filter(product => product.type === "stone");
  let wood = props.products.filter(product => product.type === "wood");

  return (
    <div className={props.toggle ? "gallery show" : "gallery hide"}>
      <GalleryNav />
      <h1>{props.products[0].name}</h1>
    </div>
  );
};

export default Gallery;
