import React from "react";

// React Router
import { Link } from "react-router-dom";

// React Icons
import { IoIosList } from "react-icons/io";
import { IoMdApps } from "react-icons/io";

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
              <Link className="material" to="/">
                x
              </Link>
            </div>
          </li>
        ) : (
          <li>
            <Link className="material" to="/ceramic">
              Ceramic
            </Link>
          </li>
        )}

        <li className={material === "stone" ? "active-link" : null}>
          <Link className="material" to="/stone">
            Stone
          </Link>
        </li>
        <li className={material === "wood" ? "active-link" : null}>
          <Link className="material" to="/wood">
            Wood
          </Link>
        </li>
        <li onClick={setDisplayType}>
          {displayType ? <IoMdApps /> : <IoIosList />}
        </li>
      </ul>
    </div>
  );
};

export default GalleryNav;
