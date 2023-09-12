import React from "react";
import { FaRegStar, FaStar } from 'react-icons/fa';
import hotelimg from "../assets/images/hotel1.jpg";
import "./comp-styles/TopHotels.css";

function TopHotels() {
  return (
    <>
      <section className="top-hotel-section">
        <h1>Top Hotels</h1>
        <div className="hotel-cards">
          <img src={hotelimg }/>
          <p>Name Of the Hotel</p>
          <p>Location</p>
          <p><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/></p>
        </div>
        <div className="hotel-cards">
          <img src={hotelimg }/>
          <p>Name Of the Hotel</p>
          <p>Location</p>
          <p><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/></p>
        </div>
        <div className="hotel-cards">
          <img src={hotelimg }/>
          <p>Name Of the Hotel</p>
          <p>Location</p>
          <p><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/></p>
        </div>
        <div className="hotel-cards">
          <img src={hotelimg }/>
          <p>Name Of the Hotel</p>
          <p>Location</p>
          <p><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/></p>
        </div>
        <div className="hotel-cards">
          <img src={hotelimg }/>
          <p>Name Of the Hotel</p>
          <p>Location</p>
          <p><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/></p>
        </div>
        <div className="hotel-cards">
          <img src={hotelimg }/>
          <p>Name Of the Hotel</p>
          <p>Location</p>
          <p><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/></p>
        </div>
        <div className="hotel-cards">
          <img src={hotelimg }/>
          <p>Name Of the Hotel</p>
          <p>Location</p>
          <p><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/></p>
        </div>
        <div className="hotel-cards">
          <img src={hotelimg }/>
          <p>Name Of the Hotel</p>
          <p>Location</p>
          <p><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/></p>
        </div>
        <div className="hotel-cards">
          <img src={hotelimg }/>
          <p>Name Of the Hotel</p>
          <p>Location</p>
          <p><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/></p>
        </div>
        <div className="hotel-cards">
          <img src={hotelimg }/>
          <p>Name Of the Hotel</p>
          <p>Location</p>
          <p><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/></p>
        </div>
      </section>
    </>
  );
}

export default TopHotels;
