import React, { useEffect, useState } from "react";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "../components/comp-styles/Hotels.css";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../config";

function Hotels() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")
  const navigate = useNavigate();
  // const dataRef = firebase.firestore().collection('hotels')
  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const hotelsCollection = collection(firestore, "hotels");
        const querySnapshot = await getDocs(hotelsCollection);
        const hotelsData = [];
        querySnapshot.forEach((doc) => {
          hotelsData.push({ id: doc.id, ...doc.data() });
        });
        setData(hotelsData);
      } catch (error) {
        console.error("Error Fetching Data:", error);
      }
    };

    fetchHotels();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredHotels = data.filter((hotel) => {
    return hotel.NAME && hotel.NAME.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const beachOptions = data.map((hotel) => (
    <option key={hotel.id} value={hotel.NAME} />
  ));
  
  const handleBeachClick = (id) => {
    const selectedBeach = data.find((beach) => beach.id === id);
    if (selectedBeach) {
      navigate(`/beachinfo`, { state: { beachData: selectedBeach } });
    }
  };
  
  const handleClick = (id) => {
    const selectedClub = data.find((club) => club.id === id);
    if (selectedClub) {
      navigate(`/clubInfo`, { state: { clubData: selectedClub } });
    }
  };


  const hotels = filteredHotels.map((data) => {
    return (
     
        <div key={data.id} className="hotel-card" onClick={() => {handleClick(data.id)}}>
          <div className="image-div">
            <img src={data.IMAGE} />
          </div>
          <div className="all-info">
            <h4 className="place_name">{data.NAME}</h4>
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
      {" "}
      <Header />
      <input type="search" className="search-each" id="" placeholder="Search" value={searchTerm} onChange={handleSearch}/>
      <h4 className="top-line">
        Our comprehensive hotel listings provide in-depth information, including
        reviews, ratings, and exclusive deals, empowering you to make informed
        choices and secure the ideal lodging for your next travel adventure.
        Let's explore them.
      </h4>
      <div className="hotels-cards">{hotels}</div>
    </>
  );
}

export default Hotels;

// import { getDatabase, onValue, ref } from "firebase/database";
// import React, { useEffect, useState } from "react";
// import { GrLocation } from 'react-icons/gr';
// import { Link } from 'react-router-dom';
// import Header from "../components/Header";
// import "../components/comp-styles/Hotels.css";

// function Hotels() {
//   const [hotelsData, setHotelsData] = useState([]);

//   useEffect(() => {
//     const db = getDatabase();
//     const hotelsRef = ref(db, 'hotels-data');

//     onValue(hotelsRef, (snapshot) => {
//       const data = snapshot.val();
//       if (data) {
//         const hotelsArray = Object.keys(data).map((key) => ({ id: key, ...data[key] }));
//         setHotelsData(hotelsArray);
//       }
//     });
//   }, []);

//   const hotels = hotelsData.map((data) => {
//     return (
//       <Link to={`/beachinfo/${data.id}`} key={data.id}>
//         <div className="hotel-card" key={data.id}>
//           <div className="image-div">
//             <img src={data.IMAGE} alt="Loading...please wait" />
//           </div>
//           <div className="all-info">
//             <h4 className="place-name">{data.NAME}</h4>
//             <h6 className="place-location"><GrLocation className="location-icon"/>{data.LOCATION}</h6>
//           </div>
//         </div>
//       </Link>
//     );
//   });

//   return (
//     <>
//       <Header />
//       <input type="search" className="search-each" id="" placeholder="Search" />
//       <h4 className="top-line">
//         Our comprehensive hotel listings provide in-depth information, including
//         reviews, ratings, and exclusive deals, empowering you to make informed
//         choices and secure the ideal lodging for your next travel adventure.
//         Let's explore them.
//       </h4>
//       <div className="hotels-cards">{hotels}</div>
//     </>
//   );
// }

// export default Hotels;
