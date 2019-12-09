import React, { useState, useEffect } from "react";

// Components
import Swatch from "./Swatch";
import GalleryNav from "./GalleryNav";

// Stylesheet
import "../css/Gallery.scss";

const Gallery = props => {
  let ceramics = props.products.filter(product => product.type === "ceramic");
  let stones = props.products.filter(product => product.type === "stone");
  let woods = props.products.filter(product => product.type === "wood");

  let products = woods.map(product => <Swatch product={product} />);

  const { floorType, setFloorType } = useState("");

  return (
    <div className={props.toggle ? "gallery show" : "gallery hide"}>
      <GalleryNav />
      {products}
    </div>
  );
};

export default Gallery;
