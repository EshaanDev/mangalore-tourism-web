import React from "react";
import "./comp-styles/SearchBox.css";
import { FaSearch } from "react-icons/fa";
function SearchBox() {
  return (
    <>
      <div className="search-section">
        <h1>
          Explore the majesty of the <span> Coast</span>
        </h1>
        <div className="input-wrapper">
          <FaSearch style={{ color: "gray", size: 42 }} />
          <input type="text" placeholder="Search for places to explore..." />
          <button type="submit">Search</button>
        </div>
      </div>
    </>
  );
}

export default SearchBox;
