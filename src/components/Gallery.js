import React, { useState, useEffect } from "react";

// React Router
import { Route, Switch } from "react-router-dom";

// Components
import Swatch from "./Swatch";
import GalleryContent from "./GalleryContent";

// Hooks
import useToggle from "../hooks/useToggle";

// React Icons
import { FaChevronUp } from "react-icons/fa";

// Stylesheet
import "../css/Gallery.scss";

const Gallery = props => {
  let ceramic = props.products
    .filter(product => product.type === "Ceramic")
    .map(product => (
      <Swatch
        product={product}
        addToCart={props.addToCart}
        quickViewItemHandler={props.quickViewItemHandler}
      />
    ));

  let stone = props.products
    .filter(product => product.type === "Stone")
    .map(product => (
      <Swatch
        product={product}
        addToCart={props.addToCart}
        quickViewItemHandler={props.quickViewItemHandler}
      />
    ));

  let wood = props.products
    .filter(product => product.type === "Wood")
    .map(product => (
      <Swatch
        product={product}
        addToCart={props.addToCart}
        quickViewItemHandler={props.quickViewItemHandler}
      />
    ));

  let all = props.products.map(product => (
    <Swatch
      product={product}
      addToCart={props.addToCart}
      quickViewItemHandler={props.quickViewItemHandler}
    />
  ));

  const [floorType, setFloorType] = useState("");

  console.log("all", all);

  return (
    <div className={props.toggle ? "gallery show" : "gallery hide"}>
      <Switch>
        <Route
          exact
          path="/ceramic"
          render={() => (
            <GalleryContent products={ceramic} material="ceramic" />
          )}
        />
        <Route
          exact
          path="/stone"
          render={() => <GalleryContent products={stone} material="stone" />}
        />
        <Route
          exact
          path="/wood"
          render={() => <GalleryContent products={wood} material="wood" />}
        />
        <Route
          exact
          path="/"
          render={() => <GalleryContent products={all} />}
        />
      </Switch>
    </div>
  );
};

export default Gallery;
