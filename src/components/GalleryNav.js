import React from "react";

// React Router
import { Link } from "react-router-dom";

// React Icons
import { IoIosList } from "react-icons/io";
import { IoMdApps } from "react-icons/io";

// Stylesheet
import "../css/GalleryNav.scss";

const GalleryNav = props => {
  console.log("match", window.location.href);
  return (
    <div className="gallery-nav">
      <ul className="gallery-nav-links">
        <li>
          <Link className="material" to="/ceramic">
            Ceramic
          </Link>
        </li>
        <li>
          <Link className="material" to="/stone">
            Stone
          </Link>
        </li>
        <li>
          <Link className="material" to="/wood">
            Wood
          </Link>
        </li>
        <li onClick={props.setDisplayType}>
          {props.displayType ? <IoMdApps /> : <IoIosList />}
        </li>
      </ul>
    </div>
  );
};

export default GalleryNav;
