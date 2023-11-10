import React, { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from "./CustomArrows";
import './comp-styles/CustomArrows.css';
import "./comp-styles/TopBeaches.css";

function TopBeaches() {
  const [data, setData] = useState([]);
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
  //     items: 14
  //   },
  // };

const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
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

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const dataCollection = collection(firestore, "beaches");
  //       const querySnapshot = await getDocs(dataCollection);
  //       const dataCollected = [];
  //       querySnapshot.forEach((doc) => {
  //         dataCollected.push({ id: doc.id, ...doc.data() });
  //       });
  //       setData(dataCollected.slice(0, 10)); // Get the first 10 items from the database
  //     } catch (error) {
  //       console.error("Error Fetching Data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // const handleBeachClick = (id) => {
  //   const selectedBeach = data.find((beach) => beach.id === id);
  //   if (selectedBeach) {
  //     navigate(`/beachinfo`, { state: { beachData: selectedBeach } });
  //   }
  // };


  return (
    <>
      <section className="top-beaches-section">
        <h1>Top Beaches</h1>
        <h5>Best recommended Beaches in Mangalore</h5>
        {/* <Carousel responsive={responsive} style={{ margin: "0" }}> */}
        <Slider {...settings}>
          <div className="beach-cards" >
          {/* <img src= alt="Loading, please wait" /> */}
          <div className="text-area">
          <h4 className="place-name"></h4>
          <h6 className="place-location"></h6>
            <p>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </p>
          </div>
          </div>
        </Slider>
      </section>
    </>
  );
}

export default TopBeaches;
