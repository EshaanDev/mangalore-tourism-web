import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Slider from "react-slick";
import hotelimg from "../assets/images/hotel1.jpg";
import { NextArrow, PrevArrow } from "./CustomArrows";
import './comp-styles/CustomArrows.css';
import "./comp-styles/RecommendedForYou.css";


function RecommendedForYou() {
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
  //     items: 2,
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
    slidesToShow: 5 ,
    slidesToScroll: 1,
    prevArrow: <PrevArrow/>, // Use the custom PrevArrow component
    nextArrow: <NextArrow />, // Use the custom NextArrow component
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
    
  };
  
  return (
    <>
      <section className="recommended-for-you-section">
        <h1>Recommended For You</h1>
        <h5>Best recommended places in Mangalore</h5>
        {/* <Carousel responsive={responsive}> */}
        <Slider {...settings}>
          <div className="recommended-cards">
            <img src={hotelimg} />
            <p>Name Of the Recommended</p>
            <p>Location</p>
            <p>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </p>
          </div>
          <div className="recommended-cards">
            <img src={hotelimg} />
            <p>Name Of the Recommended</p>
            <p>Location</p>
            <p>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </p>
          </div>
          <div className="recommended-cards">
            <img src={hotelimg} />
            <p>Name Of the Recommended</p>
            <p>Location</p>
            <p>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </p>
          </div>
          <div className="recommended-cards">
            <img src={hotelimg} />
            <p>Name Of the Recommended</p>
            <p>Location</p>
            <p>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </p>
          </div>
          <div className="recommended-cards">
            <img src={hotelimg} />
            <p>Name Of the Recommended</p>
            <p>Location</p>
            <p>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </p>
          </div>
          <div className="recommended-cards">
            <img src={hotelimg} />
            <p>Name Of the Recommended</p>
            <p>Location</p>
            <p>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </p>
          </div>
          <div className="recommended-cards">
            <img src={hotelimg} />
            <p>Name Of the Recommended</p>
            <p>Location</p>
            <p>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </p>
          </div>
          <div className="recommended-cards">
            <img src={hotelimg} />
            <p>Name Of the Recommended</p>
            <p>Location</p>
            <p>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </p>
          </div>
          <div className="recommended-cards">
            <img src={hotelimg} />
            <p>Name Of the Recommended</p>
            <p>Location</p>
            <p>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </p>
          </div>
          <div className="recommended-cards">
            <img src={hotelimg} />
            <p>Name Of the Recommended</p>
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

export default RecommendedForYou;
