import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import religiousimg from "../assets/images/temple1.jpg";
import Header from "../components/Header";
import "../components/comp-styles/ReligiousPlaces.css";
import religiousPlaces from "../religiousPlaces";

function ReligiousPlaces() {
  const religiousPlace = religiousPlaces.map((data) => {
    return (
      <div className="religiousplaces-card">
        <div className="image-div">
          <img src={data.IMAGE} />
        </div>
        <div className="all-info">
          <h4>{data.NAME}</h4>
          <h6>{data.LOCATION}</h6>
        </div>
      </div>
    );
  });
  return (
    <>
      <Header />
      <input type="search" className="search-each" id="" placeholder="Search" />
      <h4 className="top-line">
        Delve into a spiritual journey like never before with our meticulously
        curated list of religious places, showcasing a diverse array of sacred
        sites, temples, mosques, and churches, each steeped in history and
        culture..
      </h4>
      <div className="religiousplaces-cards">{religiousPlace}</div>
    
    </>
  );
}

export default ReligiousPlaces;
