import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "../components/comp-styles/Clubs.css";
import { firestore } from "../config";
import { useNavigate } from "react-router-dom";

function Clubs() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataCollection = collection(firestore, "Clubs-data");
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

  const filteredClubs = data.filter((club) => {
    return (
      club.NAME && club.NAME.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });



  const handleClick = (id) => {
    const selectedClub = data.find((club) => club.id === id);
    if (selectedClub) {
      navigate(`/clubInfo`, { state: { clubData: selectedClub } });
    }
  };


  const clubs = filteredClubs.map((data) => {
    return (
      <div className="club-card"  onClick={() => handleClick(data.id)}>
        <div className="image-div">
          <img src={data.IMAGE} alt="Loading...please wait" />
        </div>
        <div className="all-info">
          <h4 className="place-name">{data.NAME}</h4>
          <h6 className="place-location">
            <GrLocation className="location-icon" />
            {data.ADDRESS}
          </h6>
        </div>
      </div>
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
      <div className="clubs-cards">{clubs}</div>
    </>
  );
}

export default Clubs;
