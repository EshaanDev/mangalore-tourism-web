import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import hotelimg from "../assets/images/hotel1.jpg";
import "./comp-styles/TopBeaches.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function TopBeaches() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 14
    },
  };
  return (
    <>
      <section className="top-beaches-section">
        <h1>Top Beaches</h1>
        <h5>Best recommended Beaches in Mangalore</h5>
        {/* <Carousel responsive={responsive} style={{ margin: "0" }}> */}
          <div className="beach-cards">
            <img src={hotelimg} />
            <p>Name Of the Beach</p>
            <p>Location</p>
            <p>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </p>
          </div>
          <div className="beach-cards">
            <img src={hotelimg} />
            <p>Name Of the Beach</p>
            <p>Location</p>
            <p>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </p>
          </div>
          <div className="beach-cards">
            <img src={hotelimg} />
            <p>Name Of the Beach</p>
            <p>Location</p>
            <p>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </p>
          </div>
          <div className="beach-cards">
            <img src={hotelimg} />
            <p>Name Of the Beach</p>
            <p>Location</p>
            <p>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </p>
          </div>
          <div className="beach-cards">
            <img src={hotelimg} />
            <p>Name Of the Beach</p>
            <p>Location</p>
            <p>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </p>
          </div>
          <div className="beach-cards">
            <img src={hotelimg} />
            <p>Name Of the Beach</p>
            <p>Location</p>
            <p>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </p>
          </div>
          <div className="beach-cards">
            <img src={hotelimg} />
            <p>Name Of the Beach</p>
            <p>Location</p>
            <p>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </p>
          </div>
          <div className="beach-cards">
            <img src={hotelimg} />
            <p>Name Of the Beach</p>
            <p>Location</p>
            <p>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </p>
          </div>
          <div className="beach-cards">
            <img src={hotelimg} />
            <p>Name Of the Beach</p>
            <p>Location</p>
            <p>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </p>
          </div>
          <div className="beach-cards">
            <img src={hotelimg} />
            <p>Name Of the Beach</p>
            <p>Location</p>
            <p>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </p>
          </div>
        {/* </Carousel> */}
      </section>
    </>
  );
}

export default TopBeaches;
