import React from "react";

// Stylesheet
import "../css/Swatch.scss";
import useToggle from "../hooks/useToggle";

const Swatch = ({ product, addToCart, quickViewItemHandler }) => {
  return (
    <div className="product">
      <img
        onClick={e => quickViewItemHandler(e, product)}
        className="tile-img"
        src={`${process.env.PUBLIC_URL}/samples/${product.imgURL}`}
        alt=""
      />
      <h3>{product.name}</h3>
      <ul className="details">
        <li>
          <span>PRICE</span>
          <p>{`$${product.price} / sqft`}</p>
        </li>
        <li>
          <span>Material</span>
          <p>{product.type}</p>
        </li>
        <li>
          <span>Size</span>
          <p>{product.size}</p>
        </li>
        <li>
          <button onClick={e => quickViewItemHandler(e, product)}>View</button>
        </li>
      </ul>
    </div>
  );
};

export default Swatch;

{
  /* <li>
          <button onClick={e => addToCart(e, product)}>Add To Cart</button>
        </li> */
}
