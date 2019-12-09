import React, { useState, useEffect } from "react";

// Data
import Inventory from "./data";

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
  const [products, setProducts] = useState([...Inventory]);

  useEffect(() => {
    return setProducts([...Inventory]);
  }, []);

  useEffect(() => {
    return setAnimationEnabled;
  }, [expand]);

  console.log(products);

  return (
    <div className="App">
      <div
        id="left-pane"
        className={
          expand ? "lt-pane-expand" : animationEnabled ? "lt-pane-shrink" : null
        }
      >
        <Nav toggleExpand={toggleExpand} toggle={expand} />
        <Gallery toggle={expand} products={products} />
        {!expand ? (
          <Greeting toggleExpand={toggleExpand} toggle={expand} />
        ) : null}
        <Drawer name={"about"} />
        <Drawer name={"contact"} />
      </div>
      <div
        id="right-pane"
        className={
          expand ? "rt-pane-shrink" : animationEnabled ? "rt-pane-expand" : null
        }
      >
        <Search />
        <Image />
      </div>
    </div>
  );
}

export default App;
