import React from "react";

// Components
import Nav from "./components/Nav";
import Greeting from "./components/Greeting";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Search from "./components/Search";
import Image from "./components/Image";
import Gallery from "./components/Gallery";

// Stylesheet
import "./css/App.scss";

function App() {
  return (
    <div className="App">
      <div id="left-pane">
        <Nav />
        <Gallery />
        <Greeting />
        <AboutUs />
        <ContactUs />
      </div>
      <div id="right-pane">
        <Search />
        <Image />
      </div>
    </div>
  );
}

export default App;
