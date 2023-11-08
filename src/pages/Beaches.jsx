


// // import { collection, getDocs } from "firebase/firestore";
// // import React, { useEffect, useState } from "react";
// // import { GrLocation } from "react-icons/gr";
// // import { Link } from "react-router-dom";
// // import Header from "../components/Header";
// // import "../components/comp-styles/Beaches.css";
// // import { firestore } from "../config";

// // function Beaches(props) {
//   // const [data, setData] = useState([]);
//   // const [searchTerm, setSearchTerm] = useState("");

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       const dataCollection = collection(firestore, "beaches");
//   //       const querySnapshot = await getDocs(dataCollection);
//   //       const dataCollected = [];
//   //       querySnapshot.forEach((doc) => {
//   //         dataCollected.push({ id: doc.id, ...doc.data() });
//   //       });
//   //       setData(dataCollected);
//   //     } catch (error) {
//   //       console.error("Error Fetching Data:", error);
//   //     }
//   //   };

//   //   fetchData();
//   // }, []);

//   // const handleSearch = (event) => {
//   //   setSearchTerm(event.target.value);
//   // };

//   // const filteredBeaches = data.filter((beach) => {
//   //   return beach.NAME && beach.NAME.toLowerCase().includes(searchTerm.toLowerCase());
//   // });

//   // const beachOptions = data.map((beach) => (
//   //   <option key={beach.id} value={beach.NAME} />
//   // ));
  

// //   const beaches = filteredBeaches.map((beach) => (
// //     <Link to="/beachinfo" key={beach.id}>
// //       <div className="beach-card">
//     //     <div className="image-div">
//     //       <img src={beach.IMAGE} alt="Loading...please wait" />
//     //     </div>
//     //     <div className="all-info">
//     //       <h4 className="place-name">{beach.NAME}</h4>
//     //       <h6 className="place-location">
//     //         <GrLocation className="location-icon" />
//     //         {beach.LOCATION}
//     //       </h6>
//     //     </div>
//     //   </div>
//     // </Link>
// //   ));

// //   return (
// //     <>
// //       <Header />
// //       <input
// //         type="search"
// //         className="search-each"
// //         id=""
// //         placeholder="Search"
// //         value={searchTerm}
// //         onChange={handleSearch}
// //       />
// //       <datalist id="beach-list">{beachOptions}</datalist> 
// //       <h4 className="top-line">
// //         From secluded coves to vibrant coastal hubs, our tourism website showcases
// //         an array of exquisite beach destinations, ensuring you'll find the ideal
// //         seaside escape for relaxation and adventure.
// //       </h4>
// //       <div className="beaches-cards" onClick={() => {
      
// //       }}>{beaches}</div>
// //     </>
// //   );
// // }

// // export default Beaches;

// // other imports...
// import { collection, getDocs } from "firebase/firestore";
// import React, { useEffect, useState } from "react";
// import { GrLocation } from "react-icons/gr";
// import { useNavigate } from 'react-router-dom';
// import Header from "../components/Header";
// import "../components/comp-styles/Beaches.css";
// import { firestore } from "../config";


// function Beaches(props) {
//   // existing code...
//   const [data, setData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const dataCollection = collection(firestore, "beaches");
//         const querySnapshot = await getDocs(dataCollection);
//         const dataCollected = [];
//         querySnapshot.forEach((doc) => {
//           dataCollected.push({ id: doc.id, ...doc.data() });
//         });
//         setData(dataCollected);
//       } catch (error) {
//         console.error("Error Fetching Data:", error);
//       }
//     };

//     fetchData();
//   }, []);


//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const filteredBeaches = data.filter((beach) => {
//     return beach.NAME && beach.NAME.toLowerCase().includes(searchTerm.toLowerCase());
//   });

//   const beachOptions = data.map((beach) => (
//     <option key={beach.id} value={beach.NAME} />
//   ));
//   const handleBeachClick = (id) => {
//     // Find the selected beach data
//     const selectedBeach = data.find(beach => beach.id === id);
//     // Route to BeachInfo with the selected beach data
//     navigate({
//       pathname: `/beachinfo${id}`,
//       state: { beachData: selectedBeach }
//     });
//   };

//   const beaches = filteredBeaches.map((beach) => (
//     <div
//       className="beach-card"
//       key={beach.id}
//       onClick={() => handleBeachClick(beach.id)}
//     >
//       {/* rest of the JSX */}
//       <div className="image-div">
//           <img src={beach.IMAGE} alt="Loading...please wait" />
//         </div>
//         <div className="all-info">
//           <h4 className="place-name">{beach.NAME}</h4>
//           <h6 className="place-location">
//             <GrLocation className="location-icon" />
//             {beach.LOCATION}
//           </h6>
//         </div>
//       </div>
//   ));

//   // rest of the code...
  
//   return (
//     <>
//       <Header />
//       <input
//         type="search"
//         className="search-each"
//         id=""
//         placeholder="Search"
//         value={searchTerm}
//         onChange={handleSearch}
//       />
//       <datalist id="beach-list">{beachOptions}</datalist> 
//       <h4 className="top-line">
//         From secluded coves to vibrant coastal hubs, our tourism website showcases
//         an array of exquisite beach destinations, ensuring you'll find the ideal
//         seaside escape for relaxation and adventure.
//       </h4>
//       <div className="beaches-cards" onClick={() => {
      
//       }}>{beaches}</div>
//     </>
//   );

// }

// export default (Beaches);

import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { GrLocation } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "../components/comp-styles/Beaches.css";
import { firestore } from "../config";

function Beaches(props) {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

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
    return beach.NAME && beach.NAME.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const beachOptions = data.map((beach) => (
    <option key={beach.id} value={beach.NAME} />
  ));

  const handleBeachClick = (id) => {
    const selectedBeach = data.find((beach) => beach.id === id);
    if(selectedBeach) {
    navigate(`/beachinfo`, { state: { beachData: selectedBeach } });
    }
  };

  const beaches = filteredBeaches.map((beach) => (
    // <Link to={`/beachinfo/${beach.id}`} key={beach.id}>
      <div className="beach-card" onClick={() => handleBeachClick(beach.id)}>
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
    // </Link>
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
        From secluded coves to vibrant coastal hubs, our tourism website showcases an array of exquisite beach destinations, ensuring you'll find the ideal seaside escape for relaxation and adventure.
      </h4>
      <div className="beaches-cards">{beaches}</div>
    </>
  );
}

export default Beaches;

