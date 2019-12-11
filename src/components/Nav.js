import React from "react";

// React Router
import { Link } from "react-router-dom";

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
        <li onClick={props.toggleExpand}>
          {props.toggle ? <Link to="/">Home</Link> : "Shop"}
        </li>
        <li>
          <FaShoppingBasket />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
