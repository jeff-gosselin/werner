import React, { useEffect } from "react";

// Component Imports
import AboutContent from "./AboutContent";
import ContactContent from "./ContactContent";

// Hooks
import useToggle from "../hooks/useToggle";
import useAnimations from "../hooks/useAnimations";

// React Icons
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

// Stylesheet
import "../css/Drawer.scss";

const Drawer = props => {
  const [expand, toggleExpand] = useToggle(false);
  const [animationEnabled, setAnimationEnabled] = useAnimations(false);

  useEffect(() => {
    return setAnimationEnabled;
  }, [expand]);

  return (
    <div
      className={
        expand
          ? `${props.name} expand`
          : animationEnabled
          ? `${props.name} contract`
          : `${props.name}`
      }
    >
      <button onClick={toggleExpand} className={`${props.name}-toggle`}>
        {expand ? <FaChevronDown /> : <FaChevronUp />}
      </button>
      <h2
        className={
          expand ? "grow-text" : animationEnabled ? "shrink-text" : null
        }
      >{`${props.name} Us`}</h2>
      {expand ? (
        props.name === "about" ? (
          <AboutContent />
        ) : (
          <ContactContent />
        )
      ) : null}
    </div>
  );
};

export default Drawer;
