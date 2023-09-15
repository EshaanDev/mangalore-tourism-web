import React from "react";
import "./comp-styles/SearchBox.css";
import { FaSearch } from "react-icons/fa";
function SearchBox() {
  return (
    <>
      <div className="search-section">
        <div className="img-holder">
        <h2>
          Explore the majesty of the <span> Coast</span>
        </h2>
        <div className="input-wrapper">
          <FaSearch style={{ color: "gray", size: 42 }} />
          <input type="text" placeholder="Search for places to explore..." />
          <button type="submit">Search</button>
        </div>
        </div>
       
      </div>
    </>
  );
}

export default SearchBox;
