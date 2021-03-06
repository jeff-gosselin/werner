import React from "react";

// Stylesheet
import "../css/Swatch.scss";
import useToggle from "../hooks/useToggle";

const Swatch = ({ product, displayType, quickViewItemHandler }) => {
  return (
    <div className={displayType ? "product-list" : "product-grid"}>
      <img
        onClick={e => quickViewItemHandler(e, product)}
        className="tile-img"
        src={`${process.env.PUBLIC_URL}/samples/${product.imgURL}`}
        alt=""
      />
      <h3 onClick={e => quickViewItemHandler(e, product)}>{product.name}</h3>
      <ul className="details">
        <li>
          <span>PRICE</span>
          <p className="product-info">{`$${product.price} / sqft`}</p>
        </li>
        <li>
          <span>MATERIAL</span>
          <p className="product-info">{product.type}</p>
        </li>
        <li>
          <span>SIZE</span>
          <p className="product-info">{product.size}</p>
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
