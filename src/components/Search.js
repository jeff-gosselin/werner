import React from "react";

// Stylesheet
import "../css/Search.scss";

const Search = () => {
  return (
    <form className="search">
      <input type="text" placeholder="Search" />
      <input type="submit" />
    </form>
  );
};

export default Search;
