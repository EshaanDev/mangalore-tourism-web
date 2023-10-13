import React from 'react';
import { GrLocation } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import "../components/comp-styles/Parks.css";
import parkData from '../parks-collection';

function Parks() {
  const parks = parkData.map((data) => {
    return (
      <Link to="/beachinfo">
      <div className="park-card">
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
    <Header />
    <input type="search" className='search-each' id="" placeholder='Search' />
     <h4 className='top-line'>Our tourism website offers a detailed directory of parks, encompassing serene city green spaces and breathtaking natural reserves, catering to both relaxation seekers and outdoor enthusiasts.</h4>
    <div className="parks-cards">{parks}</div>
    </>
  )
}

export default Parks