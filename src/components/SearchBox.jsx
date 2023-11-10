import { collection, getDocs } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { firestore } from "../config";
import "./comp-styles/SearchBox.css";

function SearchBox() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [click, setClick] = useState(false);
  const navigate = useNavigate();

  // const dataRef = firebase.firestore().collection('hotels')
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataCollection = collection(firestore, "full-data");
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

  const clubOptions = data.map((club) => (
    <option key={club.id} value={club.NAME} />
  ));

  const handleBeachClick = (id) => {
    const selectedBeach = data.find((club) => club.id === id);
    if (selectedBeach) {
      navigate(`/beachinfo`, { state: { beachData: selectedBeach } });
    }
  };

  const searchResults = filteredData.map((data) => {
    return (
      // <Link to="/beachinfo">
        <div className="results" onClick={() => handleBeachClick(data.id)}>
          <img src={data.IMAGE} alt="" />
          <div className="name-info">
            <h4>{data.NAME}</h4>
            <p>{data.LOCATION}</p>
          </div>
        </div>
      // </Link>
    );
  });

  return (
    <>
      <div className="search-section">
        <div className="img-holder">
          <h2>
            Explore the majesty of the <span> Coast</span>
          </h2>
          <div
            className="input-wrapper"
            onClick={() => {
              setClick(!click);
            }}
          >
            <input
              type="text"
              placeholder="Search for places to explore..."
              value={searchTerm}
              onChange={handleSearch}
            />
            {click && <div className="searchResults">{searchResults}</div>}
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBox;
