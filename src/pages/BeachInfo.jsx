import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/icons/TourMyMangaloreLogo3Offi.svg';
import beachImg from "../assets/images/beach-img.jpg";
import ReviewForm from '../components/ReviewForm';
import ReviewList from '../components/ReviewList';
import StarRating from '../components/StarRating';
import "../components/comp-styles/BeachInfo.css";
import "../components/comp-styles/Header.css";

function BeachInfo() {
  return (
    <>
    <header>
    <Link to="/">
          <img className="Logo" src={Logo} alt="" />
        </Link>
    </header>
    <section className='beach-img-section'>
      <div className="beach-img1">
        <img src={beachImg} alt=''/>
      </div>
      <div className="beach-img2">
        <img src={beachImg} alt=''/>
      </div>
    </section>
    <section className='beach-info-section'>
      <div className='description-div'>
        <h1>Description</h1>
        <p>A beach is a place of fun and relaxation. 
          It is the perfect getaway for people who want to take a break from their busy lives.
          Enjoy the calming atmosphere of a beach day and all it has to offer. Feel the soft sand between your toes and the warm sun on your skin as you take in the endless blue of the sea. Listen to the peaceful sound of waves rolling onto shore, watch as birds soar above, and see playful dolphins frolicking in the azure waters. Take a stroll along the coast or relax with loved ones on a blanket – no matter what you choose to do, each moment is sure to be filled with wonder and beauty. Let go of all worries and let yourself be surrounded by nature’s timeless serenity.</p>
      </div>
      <div className="speciality-div">
        <h1>Speciality</h1>
        <p>Soothing salt water
            Exfoliating with sand
            Working out in the waves
            Getting vital vitamin D
            Clearing mental clutter
            Detoxing from technology
            Enjoying company</p>
      </div>
    </section>
    <section className="location-weather-section">
    <div className="location-div">
        <h1>Location</h1>
        <p>Address: VRP8+P3F, Kasba Bengre, Mangaluru, Karnataka 575010
          Hours: 
          Open ⋅ Closes 7 pm
          Phone: 080 2235 2828</p>
      </div>
    <div className="weather-div">
      <h1>Weather</h1>
      <p>28°
         There will be 14 days of rain with an average of 43.0mm rain on those days. Average cloud cover will be 84%</p>
    </div>
    </section>
    <section className="rating-review-section">
      <div className="rating-div">
        <StarRating initialRating={3} maxRating={5}/>
      </div>
      <div className="review-div">
        <ReviewForm/>
      </div>
     </section>
     <section className="Review-List-Section">
      <ReviewList/>
     </section>
    </>
  )
}

export default BeachInfo