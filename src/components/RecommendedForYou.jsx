// import { collection, getDocs } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { firestore } from "../config";
import { NextArrow, PrevArrow } from "./CustomArrows";
import './comp-styles/CustomArrows.css';
import "./comp-styles/RecommendedForYou.css";

function RecommendedForYou() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
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
      breakpoint: { max: 800, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 800, min: 0 },
      items: 1,
    },
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4 ,
    slidesToScroll: 2,
   
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    prevArrow: <PrevArrow/>, // Use the custom PrevArrow component
    nextArrow: <NextArrow />, // Use the custom NextArrow component
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataCollection = collection(firestore, "hotels");
        const querySnapshot = await getDocs(dataCollection);
        const dataCollected = [];
        querySnapshot.forEach((doc) => {
          dataCollected.push({ id: doc.id, ...doc.data() });
        });
        setData(dataCollected.slice(0, 10)); // Get the first 10 items from the database
      } catch (error) {
        console.error("Error Fetching Data:", error);
      }
    };

    fetchData();
  }, []);

  const handleBeachClick = (id) => {
    const selectedBeach = data.find((beach) => beach.id === id);
    if (selectedBeach) {
      navigate(`/beachinfo`, { state: { beachData: selectedBeach } });
    }
  };
  
  
  return (
    <>
      <section className="recommended-for-you-section">
        <h1>Recommended For You</h1>
        <h5>Best recommended places in Mangalore</h5>
        {/* <Carousel responsive={responsive}> */}
        <Slider {...settings}>
        {data.map((place) => (
            <div className="recommended-cards" onClick={() => handleBeachClick(place.id)}>
              <img src={place.IMAGE} alt="Loading, please wait" />
              <div className="text-area">
              <h4 className="place-name">{place.NAME}</h4>
              <h6 className="place-location">{place.LOCATION}</h6>
            
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
}


export default RecommendedForYou; 