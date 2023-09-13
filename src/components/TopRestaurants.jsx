import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import hotelimg from "../assets/images/hotel1.jpg";
import "./comp-styles/TopRestaurants.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function TopRestaurants() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <section className="top-restaurants-section">
        <h1>Top Restaurant</h1>
        <h5>Best recommended Restaurants in Mangalore</h5>
        <Carousel responsive={responsive} style={{ margin: "0" }}>
          <div className="restaurant-cards">
            <img src={hotelimg} />
            <p>Name Of the Restaurant</p>
            <p>Location</p>
            <p>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </p>
          </div>
          <div className="restaurant-cards">
            <img src={hotelimg} />
            <p>Name Of the Restaurant</p>
            <p>Location</p>
            <p>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </p>
          </div>
          <div className="restaurant-cards">
            <img src={hotelimg} />
            <p>Name Of the Restaurant</p>
            <p>Location</p>
            <p>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </p>
          </div>
          <div className="restaurant-cards">
            <img src={hotelimg} />
            <p>Name Of the Restaurant</p>
            <p>Location</p>
            <p>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </p>
          </div>
          <div className="restaurant-cards">
            <img src={hotelimg} />
            <p>Name Of the Restaurant</p>
            <p>Location</p>
            <p>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </p>
          </div>
          <div className="restaurant-cards">
            <img src={hotelimg} />
            <p>Name Of the Restaurant</p>
            <p>Location</p>
            <p>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </p>
          </div>
          <div className="restaurant-cards">
            <img src={hotelimg} />
            <p>Name Of the Restaurant</p>
            <p>Location</p>
            <p>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </p>
          </div>
          <div className="restaurant-cards">
            <img src={hotelimg} />
            <p>Name Of the Restaurant</p>
            <p>Location</p>
            <p>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </p>
          </div>
          <div className="restaurant-cards">
            <img src={hotelimg} />
            <p>Name Of the Restaurant</p>
            <p>Location</p>
            <p>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </p>
          </div>
          <div className="restaurant-cards">
            <img src={hotelimg} />
            <p>Name Of the Restaurant</p>
            <p>Location</p>
            <p>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </p>
          </div>
        </Carousel>
      </section>
    </>
  );
}

export default TopRestaurants;
