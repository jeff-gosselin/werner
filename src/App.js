import React from "react";

// Components
import Nav from "./components/Nav";
import Greeting from "./components/Greeting";
import SocialMedia from "./components/SocialMedia";
import Contact from "./components/Contact";
import Search from "./components/Search";
import Image from "./components/Image";
import Gallery from "./components/Gallery";

// Stylesheet
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Greeting />
      <SocialMedia />
      <Contact />
      <Search />
      <Image />
      <Gallery />
    </div>
  );
}

export default App;
