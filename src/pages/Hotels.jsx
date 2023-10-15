import React from "react";
import { GrLocation } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import Header from "../components/Header";
import "../components/comp-styles/Hotels.css";
import hotelsData from "../hotels-collection";

function Hotels() {
  const hotels = hotelsData.map((data) => {
    return (
      <Link to="/beachinfo">
      <div className="hotel-card">
        <div className="image-div">
        <img src={data.IMAGE} alt="Loading...please wait" />
        </div>
        <div className="all-info">
        <h4 className="place-name">{data.NAME}</h4>
        <h6 className="place-location"><GrLocation className="location-icon"/>{data.LOCATION}</h6>
        </div>
      </div>
      </Link>
    );
  });
  return (
    <>
      {" "}
      <Header />
      <input type="search" className="search-each" id="" placeholder="Search" />
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
