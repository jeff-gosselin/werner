import React from "react";

// Components
import { Item } from "./Item";

// Stylesheet
import "../css/Cart.scss";

// React Icons
import { FiXSquare } from "react-icons/fi";

export const Cart = ({ cartItems, cartDisplay, setCartDisplay }) => {
  let myCart = cartItems.map(cartItem => <Item cartItem={cartItem} />);
  let subtotals = cartItems.map(cartItem => cartItem.subtotal);
  let total = 0;

  if (subtotals.length > 0) {
    total = subtotals.reduce((a, b) => a + b);
  }

  return (
    <div className={cartDisplay ? "cart view-cart" : "cart"}>
      <div className="cart-window">
        <h2>Your Shopping Basket</h2>
        <FiXSquare className="close-btn" onClick={setCartDisplay} />
        <div className="cart-window-items">{myCart}</div>

        <p className="total">
          Total: <span>${total}</span>
        </p>
      </div>
      <div className="close-cart" onClick={setCartDisplay}></div>
    </div>
  );
};
