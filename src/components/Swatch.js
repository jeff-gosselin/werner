import React from "react";

// Stylesheet
import "../css/Swatch.scss";

const Swatch = ({ product, addToCart }) => {
  return (
    <div className="product">
      <img
        className="tile-img"
        src={`${process.env.PUBLIC_URL}/samples/${product.imgURL}`}
        alt=""
      />
      <h3>{product.name}</h3>
      <ul className="details">
        <li>{`$${product.price} / sqft`}</li>
        <li>
          <span>Material:</span> {product.type}
        </li>
        <li>
          <span>Size:</span> {product.size}
        </li>
        <li>
          <button onClick={e => addToCart(e, product)}>Add To Cart</button>
        </li>
      </ul>
    </div>
  );
};

export default Swatch;
