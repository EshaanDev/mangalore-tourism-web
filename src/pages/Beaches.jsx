import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "../components/comp-styles/Beaches.css";
import { firestore } from "../config";

function Beaches(props) {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [dataInfo, setDataInfo] = useState([]);
  const dataCollections = collection(firestore, "beaches");
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataCollection = collection(firestore, "beaches");
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

  const filteredBeaches = data.filter((beach) => {
    return (
      beach.NAME && beach.NAME.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const beachOptions = data.map((beach) => (
    <option key={beach.id} value={beach.NAME} />
  ));

  let name;

  const beaches = filteredBeaches.map((beach) => (
    <Link to="/beachinfo" key={beach.id}>
      <div className="beach-card" onClick={() => {
        
      }}>
        <div className="image-div">
          <img src={beach.IMAGE} alt="Loading...please wait" />
        </div>
        <div className="all-info">
          <h4 className="place-name">{beach.NAME}</h4>
          <h6 className="place-location">
            <GrLocation className="location-icon" />
            {beach.LOCATION}
          </h6>
        </div>
      </div>
    </Link>
  ));

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
      <datalist id="beach-list">{beachOptions}</datalist>
      <h4 className="top-line">
        From secluded coves to vibrant coastal hubs, our tourism website
        showcases an array of exquisite beach destinations, ensuring you'll find
        the ideal seaside escape for relaxation and adventure.
      </h4>
      <div className="beaches-cards" onClick={() => {}}>
        {beaches}
      </div>
    </>
  );
}

export default Beaches;
