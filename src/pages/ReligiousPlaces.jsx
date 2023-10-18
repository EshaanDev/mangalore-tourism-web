import React from "react";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "../components/comp-styles/ReligiousPlaces.css";
import religiousPlaces from "../religiousPlaces-collection";
import { useState,useEffect } from "react";
import { firestore } from "../config";
import { collection, getDocs } from "firebase/firestore";


function ReligiousPlaces() {
  const [data, setData] = useState([]);
  // const dataRef = firebase.firestore().collection('hotels')
  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const religiousPlacesCollection = collection(firestore, "religious-places");
        const querySnapshot = await getDocs(religiousPlacesCollection);
        const religiousPlacesData = [];
        querySnapshot.forEach((doc) => {
          religiousPlacesData.push({ id: doc.id, ...doc.data() });
        });
        setData(religiousPlacesData);
      } catch (error) {
        console.error("Error Fetching Data:", error);
      }
    };

    fetchHotels();
  }, []);

  const religiousPlace = data.map((data) => {
    return (
      <Link to="/religiousplacesinfo">
        <div key={data.id} className="religiousplaces-card">
          <div className="image-div">
            <img src={data.IMAGE} alt="Loading.. Please wait" />
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
        Delve into a spiritual journey like never before with our meticulously
        curated list of religious places, showcasing a diverse array of sacred
        sites, temples, mosques, and churches, each steeped in history and
        culture..
      </h4>
      <div className="religiousplaces-cards">{religiousPlace}</div>
    </>
  );
}

export default ReligiousPlaces;
