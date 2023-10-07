import React from "react";
import Header from "../components/Header";
import "../components/comp-styles/Hotels.css";
import hotelsData from "../hotels";

function Hotels() {
  const hotels = hotelsData.map((data) => {
    return (
      <div className="hotel-card">
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
      {" "}
      <Header />
      <input type="search" className="search-each" id="" placeholder="Search" />
      <h4 className="top-line">
        Our comprehensive hotel listings provide in-depth information, including
        reviews, ratings, and exclusive deals, empowering you to make informed
        choices and secure the ideal lodging for your next travel adventure.
        Let's explore them.
      </h4>
      <div className="hotels-cards">{hotels}</div>
    </>
  );
}

export default Hotels;
