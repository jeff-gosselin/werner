import React from "react";

// Werner Logo
import Logo from "../images/werner-logo.svg";

// React Icons
import { FaShoppingBasket } from "react-icons/fa";

// Stylesheet
import "../css/Nav.scss";

const Nav = props => {
  return (
    <nav>
      <ul>
        <li>
          <img src={Logo} alt="Werner Flooring & Tile Co." />
        </li>
        <li onClick={props.toggleExpand}>{props.toggle ? "Home" : "Shop"}</li>
        <li>
          <FaShoppingBasket />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
