import React from "react";

// React Router
import { Link } from "react-router-dom";

// Werner Logo
import Logo from "../images/werner-logo.svg";

// React Icons
import { FaShoppingBasket } from "react-icons/fa";

// Stylesheet
import "../css/Nav.scss";

const Nav = ({ toggle, toggleExpand, setCartDisplay, cartItems }) => {
  return (
    <nav>
      <ul>
        <li class="logo">
          <img src={Logo} alt="Werner Flooring & Tile Co." />
        </li>
        <li onClick={toggleExpand}>
          {toggle ? <Link to="/">Home</Link> : "Shop"}
        </li>
        <li>
          <FaShoppingBasket onClick={setCartDisplay} />
          <p className="cart-counter">
            {cartItems.length > 0 ? cartItems.length : null}
          </p>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
