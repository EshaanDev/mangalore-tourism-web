
import { collection, getDocs } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { firestore } from "../config";
import "./comp-styles/SearchBox.css";

function SearchBox() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataCollection = collection(firestore, "fullData");
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

  const filteredData = data.filter((club) => {
    return (
      club.NAME && club.NAME.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleBeachClick = (id) => {
    const selectedBeach = data.find((club) => club.id === id);
    if (selectedBeach) {
      navigate("/beachinfo", { state: { beachData: selectedBeach } });
    }
    
  };

  const searchResults = filteredData.map((data) => (
    <div className="results" key={data.id} onClick={() => handleBeachClick(data.id)}>
      <img src={data.IMAGE} alt="" />
      <div className="name-info">
        <h4>{data.NAME}</h4>
        <p>{data.LOCATION}</p>
      </div>
    </div>
  ));

  return (
    <>
      <div className="search-section">
        <div className="img-holder">
          <h2>
            Explore the majesty of the <span> Coast</span>
          </h2>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for places to explore..."
              value={searchTerm}
              onChange={handleSearch}
            />
            {searchTerm !== "" && <div className="searchResults">{searchResults}</div>}
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBox;
