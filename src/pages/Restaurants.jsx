import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "../components/comp-styles/Restaurants.css";
import { firestore } from "../config";
import Spinner from ".././assets/icons/Spinner-1.2s-200px.svg";

function Restaurants() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  // const dataRef = firebase.firestore().collection('hotels')

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const dataCollection = collection(firestore, "restaurants-data");
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

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRestaurants = data.filter((restaurants) => {
    return (
      restaurants.NAME &&
      restaurants.NAME.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const beachOptions = data.map((restaurants) => (
    <option key={restaurants.id} value={restaurants.NAME} />
  ));

  const beaches = filteredRestaurants.map((data) => {
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
      <input
        type="search"
        className="search-each"
        id=""
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearch}
      />
      <h4 className="top-line">
        From secluded coves to vibrant coastal hubs, our tourism website
        showcases an array of exquisite beach destinations, ensuring you'll find
        the ideal seaside escape for relaxation and adventure.
      </h4>
      <div className="beaches-cards">{beaches}</div>{" "}
    </>
  );
}

export default Restaurants;
