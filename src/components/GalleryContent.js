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
      <div
        className={
          displayType ? "gallery-content-list" : "gallery-content-grid"
        }
      >
        {products}
      </div>
    </div>
  );
};

export default GalleryContent;
