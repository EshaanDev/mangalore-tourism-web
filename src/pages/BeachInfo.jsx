// import React from 'react';
// import { Link } from 'react-router-dom';
// import Logo from '../assets/icons/TourMyMangaloreLogo3Offi.svg';
// // import ReviewForm from '../components/ReviewForm';
// // import ReviewList from '../components/ReviewList';
// // import StarRating from '../components/StarRating';
// import { useLocation } from 'react-router-dom';
// import ReviewInfo from '../components/ReviewInfo';
// import SignIn from '../components/SignIn';
// import "../components/comp-styles/BeachInfo.css";
// import "../components/comp-styles/Header.css";

// function BeachInfo(props) {

// // const BeachInfo = () => {
// //   useEffect(() => {
// //     window.scrollTo(0, 0);
// //   }, []);

// const location = useLocation();
// const beachData = location.state ? location.state.beachData : null;

// console.log("beachData : ", beachData)

// if(!beachData){
//   console.log("No data")
//   return<div>No data</div>
// }
//   return (
//     <>
//     <header>
//       <Link to="/">
//           <img className="Logo" src={Logo} alt="" />
//       </Link>
//       <SignIn/>
//     </header>
//     <section className='beach-img-section'>
//       <div className="beach-img1">
//         <img src={beachData.IMAGE} alt=''/>
//       </div>
//       {/* <div className="beach-img2">
//         <img src={beachImg} alt=''/>
//       </div> */}
//     </section>
//     <h2 className='main-name'>{beachData.NAME}</h2>
//     <section className='beach-info-section'>
//       <div className='description-div'>
//         <h1>Description</h1>
//         <p>{beachData.DESCRIPTION}</p>
//       </div>
//       <div className="speciality-div">
//         <h1>Speciality</h1>
//         <p>{beachData.SPECIALITY}</p>
//       </div>
//     </section>
//     <section className="location-weather-section">
//     <div className="location-div">
//         <h1>Location</h1>
//         <p>{beachData.LOCATION}</p>
//       </div>
//     <div className="weather-div">
//       <h1>Weather</h1>
//       <p>28°
//          There will be 14 days of rain with an average of 43.0mm rain on those days. Average cloud cover will be 84%</p>
//     </div>
//     </section>
//     {/* <section className="rating-review-section">
//       <div className="rating-div">
//         <StarRating initialRating={3} maxRating={5}/>
//       </div>
//       <div className="review-div">
//         <ReviewForm/>
//       </div>
//      </section>
//      <section className="Review-List-Section">
//       <ReviewList/>
//      </section> */}
//      <ReviewInfo/>
//     </>
//   )
// }

// export default BeachInfo;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import Logo from '../assets/icons/TourMyMangaloreLogo3Offi.svg';
// import { useLocation } from 'react-router-dom';
// import ReviewInfo from '../components/ReviewInfo';
// import SignIn from '../components/SignIn';
// import "../components/comp-styles/BeachInfo.css";
// import "../components/comp-styles/Header.css";

// function BeachInfo(props) {
  // const location = useLocation();
  // const beachData = location.state ? location.state.beachData : null;

  // console.log("beachData : ", beachData);

  // if (!beachData) {
  //   console.log("No data");
  //   return <div>No data</div>;
  // }

  // return (
  //   <>
  //     <header>
  //       <Link to="/">
  //         <img className="Logo" src={Logo} alt="" />
  //       </Link>
  //       <SignIn />
  //     </header>
  //     <section className='beach-img-section'>
  //       <div className="beach-img1">
  //         <img src={beachData.IMAGE} alt='' />
  //       </div>
  //     </section>
  //     <h2 className='main-name'>{beachData.NAME}</h2>
  //     <section className='beach-info-section'>
  //       <div className='description-div'>
  //         <h1>Description</h1>
  //         <p>{beachData.DESCRIPTION}</p>
  //       </div>
  //       <div className="speciality-div">
  //         <h1>Speciality</h1>
  //         <p>{beachData.SPECIALITY}</p>
  //       </div>
  //     </section>
  //     <section className="location-weather-section">
  //       <div className="location-div">
  //         <h1>Location</h1>
  //         <p>{beachData.LOCATION}</p>
  //       </div>
  //       <div className="weather-div">
  //         <h1>Weather</h1>
  //         <p>28° There will be 14 days of rain with an average of 43.0mm rain on those days. Average cloud cover will be 84%</p>
  //       </div>
  //     </section>
  //     <ReviewInfo beachData={beachData} />
  //   </>
  // );
// }

// export default BeachInfo;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from '../assets/icons/TourMyMangaloreLogo3Offi.svg';
import ReviewInfo from '../components/ReviewInfo';
import SignIn from '../components/SignIn';
import "../components/comp-styles/BeachInfo.css";
import "../components/comp-styles/Header.css";

function BeachInfo() {
  const location = useLocation();
  const beachData = location.state ? location.state.beachData : null;

  console.log("beachData : ", beachData);

  if (!beachData) {
    console.log("No data");
    return <div>No data</div>;
  }
  else{
    // return (
    //   <>
    //     {/* <Header /> */}
    //     <div>
    //       <h2>{beachData.NAME}</h2>
    //       <p>{beachData.DESCRIPTION}</p>
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
            <img src={beachData.IMAGE} alt='' />
          </div>
        </section>
        <h2 className='main-name'>{beachData.NAME}</h2>
        <section className='beach-info-section'>
          <div className='description-div'>
            <h1>Description</h1>
            <p>{beachData.DESCRIPTION}</p>
          </div>
          <div className="speciality-div">
            <h1>Speciality</h1>
            <p>{beachData.SPECIALITY}</p>
          </div>
        </section>
        <section className="location-weather-section">
          <div className="location-div">
            <h1>Location</h1>
            <p>{beachData.LOCATION}</p>
          </div>
          <div className="weather-div">
            <h1>Weather</h1>
            <p>28° There will be 14 days of rain with an average of 43.0mm rain on those days. Average cloud cover will be 84%</p>
          </div>
        </section>
        <ReviewInfo beachData={beachData} />
      </>
    );
  }

 
}

export default BeachInfo;

