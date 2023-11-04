import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from '../assets/icons/TourMyMangaloreLogo3Offi.svg';
import ReviewInfo from '../components/ReviewInfo';
import SignIn from '../components/SignIn';
import "../components/comp-styles/BeachInfo.css";
import "../components/comp-styles/Header.css";
import { firestore } from "../config";
import { collection } from "firebase/firestore";
import ReligiousPlaces from "./ReligiousPlaces";


function ReligiousInfo() {
    const location = useLocation();
    const clubData = location.state ? location.state.clubData : null;
  
  
    if (!clubData) {
      console.log("No data");
      return <div>No data</div>;
    }
    else{
      // return (
      //   <>
      //     {/* <Header /> */}
      //     <div>
      //       <h2>{clubData.NAME}</h2>
      //       <p>{clubData.DESCRIPTION}</p>
      //       {/* Add other beach information fields here */}
      //     </div>
      //   </>
      // );
 
   
      return (
        <>
          <header>
            <Link to="/">
              <img className="Logo" src={Logo} alt="" />
            </Link>
            <SignIn />
          </header>
          <section className='beach-img-section'>
            <div className="beach-img1">
              <img src={clubData.IMAGE} alt='' />
            </div>
          </section>
          <h2 className='main-name'>{clubData.NAME}</h2>
          <section className='beach-info-section'>
            <div className='description-div'>
              <h1>Description</h1>
              <p>{clubData.DESCRIPTION}</p>
            </div>
            <div className="speciality-div">
              <h1>Speciality</h1>
              <p>{clubData.SPECIALITY}</p>
            </div>
          </section>
          <section className="location-weather-section">
            <div className="location-div">
              <h1>Location</h1>
              <p>{clubData.LOCATION}</p>
            </div>
            <div className="weather-div">
              <h1>Weather</h1>
              <p>28° There will be 14 days of rain with an average of 43.0mm rain on those days. Average cloud cover will be 84%</p>
            </div>
          </section>
          <ReviewInfo clubData={clubData} />
        </>
      );
    }
  
}

export default ReligiousInfo