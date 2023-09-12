import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import hotelimg from "../assets/images/hotel1.jpg";
import "./comp-styles/TopRestaurants.css";

function TopRestaurants() {
  return (
    <>
      <section className="top-restaurants-section">
        <h1>Top Restaurant</h1>
        <div className="restaurant-cards">
          <img src={hotelimg }/>
          <p>Name Of the Restaurant</p>
          <p>Location</p>
          <p><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/></p>
        </div>
        <div className="restaurant-cards">
          <img src={hotelimg }/>
          <p>Name Of the Restaurant</p>
          <p>Location</p>
          <p><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/></p>
        </div>
        <div className="restaurant-cards">
          <img src={hotelimg }/>
          <p>Name Of the Restaurant</p>
          <p>Location</p>
          <p><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/></p>
        </div>
        <div className="restaurant-cards">
          <img src={hotelimg }/>
          <p>Name Of the Restaurant</p>
          <p>Location</p>
          <p><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/></p>
        </div>
        <div className="restaurant-cards">
          <img src={hotelimg }/>
          <p>Name Of the Restaurant</p>
          <p>Location</p>
          <p><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/></p>
        </div>
        <div className="restaurant-cards">
          <img src={hotelimg }/>
          <p>Name Of the Restaurant</p>
          <p>Location</p>
          <p><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/></p>
        </div>
        <div className="restaurant-cards">
          <img src={hotelimg }/>
          <p>Name Of the Restaurant</p>
          <p>Location</p>
          <p><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/></p>
        </div>
        <div className="restaurant-cards">
          <img src={hotelimg }/>
          <p>Name Of the Restaurant</p>
          <p>Location</p>
          <p><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/></p>
        </div>
        <div className="restaurant-cards">
          <img src={hotelimg }/>
          <p>Name Of the Restaurant</p>
          <p>Location</p>
          <p><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/></p>
        </div>
        <div className="restaurant-cards">
          <img src={hotelimg }/>
          <p>Name Of the Restaurant</p>
          <p>Location</p>
          <p><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/></p>
        </div>
      </section>
    </>
  )
}

export default TopRestaurants