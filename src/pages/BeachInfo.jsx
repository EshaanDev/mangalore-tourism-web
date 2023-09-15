import React from 'react';
import { FaRegStar, FaStar } from "react-icons/fa";
import hotelimg from "../assets/images/hotel1.jpg";
import "../components/comp-styles/BeachInfo.css";

function BeachInfo() {
  return (
    <>
    <p>Helloo this is beach
        react-slider is a small, accessible,
         CSS-agnostic component that helps us build custo
         mized slider components for React applications.
         It uses the render props pattern under the 
         hood to provide a headless UI for our application.29-Jul-2021
    </p> 
    <div className="each-beach">
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
    </>
  )
}

export default BeachInfo