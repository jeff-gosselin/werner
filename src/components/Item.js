import React from "react";

// Stylesheet
import "../css/Item.scss";

export const Item = ({ cartItem }) => {
  // const [name, imgURL, price, size] = cartItem;
  return (
    <div className="cart-item-container">
      <ul className="cart-item">
        <li>
          {cartItem.qty} &nbsp; <span>x</span>
        </li>
        <li>
          <img
            className="item-img"
            src={`${process.env.PUBLIC_URL}/samples/${cartItem.imgURL}`}
            alt=""
          />
        </li>
        <li>{cartItem.name}</li>
        <li>${cartItem.subtotal}</li>
      </ul>
    </div>
  );
};
