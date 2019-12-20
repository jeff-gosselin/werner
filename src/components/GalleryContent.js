import React from "react";

// Components
import GalleryNav from "./GalleryNav";

// Hooks
import useToggle from "../hooks/useToggle";

// Stylesheet
import "../css/GalleryContent.scss";

const GalleryContent = ({ products, material }) => {
  const [displayType, setDisplayType] = useToggle(false);
  return (
    <div>
      <GalleryNav
        displayType={displayType}
        setDisplayType={setDisplayType}
        material={material}
      />
      <div className="gallery-content">{products}</div>
    </div>
  );
};

export default GalleryContent;
