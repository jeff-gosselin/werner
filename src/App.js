import React from "react";

// Component Imports
import Nav from "./components/Nav";
import Greeting from "./components/Greeting";
import Drawer from "./components/Drawer";
import Search from "./components/Search";
import Image from "./components/Image";
import Gallery from "./components/Gallery";

// Hooks
import useToggle from "./hooks/useToggle";
import useAnimations from "./hooks/useAnimations";

// Stylesheet
import "./css/App.scss";

function App() {
  const [expand, toggleExpand] = useToggle(false);
  const [animationEnabled, setAnimationEnabled] = useAnimations(false);

  return (
    <div className="App">
      <div id="left-pane" className={expand ? "lt-pane-expand" : null}>
        <Nav toggleExpand={toggleExpand} />
        <Gallery />
        <Greeting />
        <Drawer name={"about"} />
        <Drawer name={"contact"} />
      </div>
      <div id="right-pane" className={expand ? "rt-pane-contract" : null}>
        <Search />
        <Image />
      </div>
    </div>
  );
}

export default App;
