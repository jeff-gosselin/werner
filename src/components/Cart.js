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
  let subtotals = cartItems.map(cartItem => cartItem.subtotal);
  let total = 0;

  if (subtotals.length > 0) {
    total = subtotals.reduce((a, b) => a + b);
  }

  return (
    <div className={cartDisplay ? "cart view-cart" : "cart"}>
      <div>
        <h2>Your Cart</h2>
        <FiXSquare className="close-btn" onClick={setCartDisplay} />
        {myCart}
        <p>Total: ${total}</p>
      </div>
    </div>
  );
};
