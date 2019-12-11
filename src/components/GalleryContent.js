import React from "react";

// Components
import GalleryNav from "./GalleryNav";

// Hooks
import useToggle from "../hooks/useToggle";

const GalleryContent = ({ products, material }) => {
  const [displayType, setDisplayType] = useToggle(false);
  return (
    <div>
      <GalleryNav
        displayType={displayType}
        setDisplayType={setDisplayType}
        material={material}
      />
      {products}
    </div>
  );
};

export default GalleryContent;
