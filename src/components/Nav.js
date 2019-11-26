import React from "react";

// React Icons
import { FaShoppingBasket } from "react-icons/fa";

// Stylesheet
import "../css/Nav.scss";

const Nav = props => {
  return (
    <nav>
      <ul>
        <li>Werner</li>
        <li onClick={props.toggleExpand}>{props.toggle ? "Home" : "Shop"}</li>
        <li>
          <FaShoppingBasket />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
