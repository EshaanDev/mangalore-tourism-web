import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { GrLocation } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "../components/comp-styles/ReligiousPlaces.css";
import { firestore } from "../config";


function ReligiousPlaces() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")

  const navigate = useNavigate();

  // const dataRef = firebase.firestore().collection('hotels')

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const religiousPlacesCollection = collection(firestore, "religious-data");
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

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPlaces = data.filter((place) => {
    return place.NAME && place.NAME.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const beachOptions = data.map((place) => (
    <option key={place.id} value={place.NAME} />
  ));

  const handleClick = (id) => {
    const selectedClub = data.find((club) => club.id === id);
    if (selectedClub) {
      navigate(`/clubInfo`, { state: { clubData: selectedClub } });
    }
  };

  
  const handleRelPlacesClick = (id) => {
    const selectedPlace = data.find((beach) => beach.id === id);
    if(selectedPlace) {
    navigate(`/beachinfo`, { state: { beachData: selectedPlace } });
    }
  };

  const religiousPlace = filteredPlaces.map((data) => {
    return (

      // <Link to="/religiousplacesinfo">
        <div key={data.id} className="religiousplaces-card" onClick={() => handleRelPlacesClick(data.id)}>
{/* */}
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

      // </Link>

    );
  });
  return (
    <>
      <Header />
      <input type="search" className="search-each" id="" placeholder="Search" value={searchTerm} onChange={handleSearch} />
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
