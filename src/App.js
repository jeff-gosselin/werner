import React, { useState, useEffect } from "react";

// Data
import { baseURL, inventory } from "./data";

// Component Imports
import Nav from "./components/Nav";
import Greeting from "./components/Greeting";
import Drawer from "./components/Drawer";
import Search from "./components/Search";
import Image from "./components/Image";
import Gallery from "./components/Gallery";
import { Cart } from "./components/Cart";

// Hooks
import useToggle from "./hooks/useToggle";
import useAnimations from "./hooks/useAnimations";

// Stylesheet
import "./css/App.scss";

function App() {
  const [expand, toggleExpand] = useToggle(false);
  const [animationEnabled, setAnimationEnabled] = useAnimations(false);
  const [products, setProducts] = useState([]);

  const [cartDisplay, setCartDisplay] = useToggle(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    return setProducts([...inventory]);
  }, []);

  useEffect(() => {
    return setAnimationEnabled;
  }, [expand]);

  const addToCart = (e, item) => {
    setCartItems([item, ...cartItems]);
  };

  console.log("cart:", cartItems);

  return (
    <div className="App">
      <Cart
        cartItems={cartItems}
        cartDisplay={cartDisplay}
        setCartDisplay={setCartDisplay}
      />
      <div
        id="left-pane"
        className={
          expand ? "lt-pane-expand" : animationEnabled ? "lt-pane-shrink" : null
        }
      >
        <Nav
          toggleExpand={toggleExpand}
          toggle={expand}
          setCartDisplay={setCartDisplay}
        />
        <Gallery toggle={expand} products={products} addToCart={addToCart} />
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
        {/* <Search /> */}
        <Image />
      </div>
    </div>
  );
}

export default App;
