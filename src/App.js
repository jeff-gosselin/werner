import React, { useState, useEffect } from "react";

// Data
import { baseURL, inventory } from "./data";

// Component Imports
import Nav from "./components/Nav";
import Greeting from "./components/Greeting";
import Drawer from "./components/Drawer";
import QuickView from "./components/QuickView";
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

  const [quickView, setQuickView] = useToggle(false);
  const [quickViewItem, setQuickViewItem] = useState(null);

  const [cartDisplay, setCartDisplay] = useToggle(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    return setProducts([...inventory]);
  }, []);

  useEffect(() => {
    return setAnimationEnabled;
  }, [expand]);

  const addToCart = (e, item, qty) => {
    let subtotal = item.price * 20 * qty;
    let itemWithSubtotal = { ...item, subtotal: subtotal };
    console.log("XXXXXXX: ", itemWithSubtotal);
    setCartItems([itemWithSubtotal, ...cartItems]);
    setQuickView(false);
  };

  const quickViewItemHandler = (e, item) => {
    setQuickViewItem(item);
    setQuickView();
  };

  console.log("cart:", cartItems);

  return (
    <div className="App">
      <Cart
        cartItems={cartItems}
        cartDisplay={cartDisplay}
        setCartDisplay={setCartDisplay}
      />

      <QuickView
        item={quickViewItem}
        quickView={quickView}
        setQuickView={setQuickView}
        addToCart={addToCart}
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
        <Gallery
          toggle={expand}
          products={products}
          addToCart={addToCart}
          quickViewItemHandler={quickViewItemHandler}
        />
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
