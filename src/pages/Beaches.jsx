import React from "react";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";
import beachData from "../beaches-collection.js";
import Header from "../components/Header";
import "../components/comp-styles/Beaches.css";
import { firestore } from "../config";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";

function Beaches(props) {
  const [data, setData] = useState([]);
  // const dataRef = firebase.firestore().collection('hotels')
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataCollection = collection(firestore, "beach-data");
        const querySnapshot = await getDocs(dataCollection);
        const dataCollected = [];
        querySnapshot.forEach((doc) => {
          dataCollected.push({ id: doc.id, ...doc.data() });
        });
        setData(dataCollected);
      } catch (error) {
        console.error("Error Fetching Data:", error);
      }
    };

    fetchData();
  }, []);
  const beaches = data.map((data) => {
    return (
      <Link to="/beachinfo">
        <div className="beach-card">
          <div className="image-div">
            <img src={data.IMAGE} alt="Loading...please wait" />
          </div>
          <div className="all-info">
            <h4 className="place-name">{data.NAME}</h4>
            <h6 className="place-location">
              <GrLocation className="location-icon" />
              {data.LOCATION}
            </h6>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <>
      <Header />
      <input type="search" className="search-each" id="" placeholder="Search" />
      <h4 className="top-line">
        From secluded coves to vibrant coastal hubs, our tourism website
        showcases an array of exquisite beach destinations, ensuring you'll find
        the ideal seaside escape for relaxation and adventure.
      </h4>
      <div className="beaches-cards">{beaches}</div>
    </>
  );
}

export default Beaches;
