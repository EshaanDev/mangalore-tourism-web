import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import hotelimg from "../assets/images/hotel1.jpg";
import "./comp-styles/RecommendedForYou.css";

function RecommendedForYou() {
  return (
    <>
      <section className="recommended-for-you-section">
        <h1>Recommended For You</h1>
        <div className="recommended-cards">
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
  )
}

export default RecommendedForYou