import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import hotelimg from "../assets/images/hotel1.jpg";
import "./comp-styles/TopBeaches.css";

function TopBeaches() {
  return (
    <>
      <section className="top-beaches-section">
        <h1>Top Beaches</h1>
        <div className="beach-cards">
          <img src={hotelimg }/>
          <p>Name Of the Beach</p>
          <p>Location</p>
          <p><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/></p>
        </div>
        <div className="beach-cards">
          <img src={hotelimg }/>
          <p>Name Of the Beach</p>
          <p>Location</p>
          <p><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/></p>
        </div>
        <div className="beach-cards">
          <img src={hotelimg }/>
          <p>Name Of the Beach</p>
          <p>Location</p>
          <p><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/></p>
        </div>
        <div className="beach-cards">
          <img src={hotelimg }/>
          <p>Name Of the Beach</p>
          <p>Location</p>
          <p><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/></p>
        </div>
        <div className="beach-cards">
          <img src={hotelimg }/>
          <p>Name Of the Beach</p>
          <p>Location</p>
          <p><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/></p>
        </div>
        <div className="beach-cards">
          <img src={hotelimg }/>
          <p>Name Of the Beach</p>
          <p>Location</p>
          <p><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/></p>
        </div>
        <div className="beach-cards">
          <img src={hotelimg }/>
          <p>Name Of the Beach</p>
          <p>Location</p>
          <p><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/></p>
        </div>
        <div className="beach-cards">
          <img src={hotelimg }/>
          <p>Name Of the Beach</p>
          <p>Location</p>
          <p><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/></p>
        </div>
        <div className="beach-cards">
          <img src={hotelimg }/>
          <p>Name Of the Beach</p>
          <p>Location</p>
          <p><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/></p>
        </div>
        <div className="beach-cards">
          <img src={hotelimg }/>
          <p>Name Of the Beach</p>
          <p>Location</p>
          <p><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/></p>
        </div>
      </section>
    </>
  )
}

export default TopBeaches;