import React from "react";

// Stylesheet
import "../css/Item.scss";

export const Item = ({ cartItem }) => {
  // const [name, imgURL, price, size] = cartItem;
  return (
    <div>
      <ul className="cart-item">
        <li>
          <img
            className="item-img"
            src={`${process.env.PUBLIC_URL}/samples/${cartItem.imgURL}`}
            alt=""
          />
        </li>
        <li>{cartItem.name}</li>
        <li>{cartItem.price}</li>
      </ul>
      <h3></h3>
    </div>
  );
};
