import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "../components/comp-styles/Parks.css";
import { firestore } from "../config";
import { useNavigate } from "react-router-dom";


function Parks() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")
  const navigate = useNavigate();
  // const dataRef = firebase.firestore().collection('hotels')
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataCollection = collection(
          firestore,
          "parks-data"
        );
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

  const filteredParks = data.filter((park) => {
    return park.NAME && park.NAME.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const beachOptions = data.map((park) => (
    <option key={park.id} value={park.NAME} />
  ));

  const handleClick = (id) => {
    const selectedClub = data.find((club) => club.id === id);
    if (selectedClub) {
      navigate(`/clubInfo`, { state: { clubData: selectedClub } });
    }
  };

  
  
  const parks = filteredParks.map((data) => {
    return (
     
        <div className="park-card" onClick={() => {handleClick(data.id)}}>
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
      
    );
  });
  return (
    <>
      <Header />
      <input type="search" className="search-each" id="" placeholder="Search" value={searchTerm} onChange={handleSearch} />
      <h4 className="top-line">
        Our tourism website offers a detailed directory of parks, encompassing
        serene city green spaces and breathtaking natural reserves, catering to
        both relaxation seekers and outdoor enthusiasts.
      </h4>
      <div className="parks-cards">{parks}</div>
    </>
  );
}

export default Parks;
