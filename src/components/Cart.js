import React from "react";

// Components
import { Item } from "./Item";

// Stylesheet
import "../css/Cart.scss";

// React Icons
import { FiXSquare } from "react-icons/fi";

export const Cart = ({ cartItems, cartDisplay, setCartDisplay }) => {
  console.log("cartItems", cartItems);
  let myCart = cartItems.map(cartItem => <Item cartItem={cartItem} />);
  return (
    <div className={cartDisplay ? "cart view-cart" : "cart"}>
      <div>
        <h2>Your Cart</h2>
        <FiXSquare onClick={setCartDisplay} />
        {myCart}
      </div>
    </div>
  );
};
