import React from "react";

// React Icons
import { FaSearch } from "react-icons/fa";

// Stylesheet
import "../css/Search.scss";

const Search = () => {
  return (
    <div className="search">
      <form>
        <input type="text" placeholder="Search" />
        <input type="submit" />
      </form>
      <i>
        <FaSearch />
      </i>
    </div>
  );
};

export default Search;
