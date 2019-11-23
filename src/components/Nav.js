import React from "react";

// React Icons
import { FaShoppingBasket } from "react-icons/fa";

// Stylesheet
import "../css/Nav.scss";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>Werner</li>
        <li>Shop</li>
        <li>
          <FaShoppingBasket />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
