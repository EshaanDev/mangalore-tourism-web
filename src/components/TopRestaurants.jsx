import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import hotelimg from "../assets/images/hotel1.jpg";
import { NextArrow, PrevArrow } from "./CustomArrows";
import './comp-styles/CustomArrows.css';
import "./comp-styles/TopRestaurants.css";

function TopRestaurants() {
  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 4,
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 4,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 1,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //   },
  // };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 2, // Number of slides to show at this breakpoint
          slidesToScroll: 2, // Number of slides to scroll at this breakpoint
        },
      },
      {
        breakpoint: 1024, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 3, // Number of slides to show at this breakpoint
          slidesToScroll: 3, // Number of slides to scroll at this breakpoint
        },
      },
    ],
    prevArrow: <PrevArrow />, // Use the custom PrevArrow component
    nextArrow: <NextArrow />,
  };

  return (
    <>
      <section className="top-restaurants-section">
        <h1>Top Restaurant</h1>
        <h5>Best recommended Restaurants in Mangalore</h5>
        {/* <Carousel responsive={responsive} style={{ margin: "0" }}> */}
        <Slider {...settings}>
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
        {/* </Carousel> */}
        </Slider>
      </section>
    </>
  );
}

export default TopRestaurants;
