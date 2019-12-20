import React from "react";

// React Router
import { Link } from "react-router-dom";

// React Icons
import { IoIosList } from "react-icons/io";
import { IoMdApps } from "react-icons/io";
import { FaRegWindowClose } from "react-icons/fa";
import { FiXSquare } from "react-icons/fi";

// Stylesheet
import "../css/GalleryNav.scss";

const GalleryNav = ({ displayType, setDisplayType, material }) => {
  // console.log("match", window.location.href);
  return (
    <div className="gallery-nav">
      <ul className="gallery-nav-links">
        {material === "ceramic" ? (
          <li className="active-link">
            <div className="material" to="/ceramic">
              Ceramic
            </div>
            <Link className="material" to="/">
              <FiXSquare className="close-btn" />
            </Link>
          </li>
        ) : (
          <li>
            <Link className="material" to="/ceramic">
              Ceramic
            </Link>
          </li>
        )}

        {material === "stone" ? (
          <li className="active-link">
            <div className="material" to="/stone">
              Stone
            </div>
            <Link className="material" to="/">
              <FiXSquare className="close-btn" />
            </Link>
          </li>
        ) : (
          <li>
            <Link className="material" to="/stone">
              Stone
            </Link>
          </li>
        )}

        {material === "wood" ? (
          <li className="active-link">
            <div className="material" to="/wood">
              Wood
            </div>
            <Link className="material" to="/">
              <FiXSquare className="close-btn" />
            </Link>
          </li>
        ) : (
          <li>
            <Link className="material" to="/wood">
              Wood
            </Link>
          </li>
        )}

        <li onClick={setDisplayType}>
          {displayType ? <IoMdApps /> : <IoIosList />}
        </li>
      </ul>
    </div>
  );
};

export default GalleryNav;
