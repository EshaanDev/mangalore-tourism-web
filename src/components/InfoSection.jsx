import React from "react";
import conceptImg from "../assets/images/mangalore-concept.png";
import "./comp-styles/InfoSection.css";

function InfoSection() {
  return (
    <>
      <div className="info-section">
        <img src={conceptImg} alt="" />
        <div className="info-div">
          <p>
            <span>Mangalore</span>, a coastal gem nestled along the Arabian Sea in the
            southwestern part of India, is a place where natural beauty meets
            rich cultural heritage. "Tour My Mangalore" is an immersive tourism
            website project aimed at showcasing the diverse and enchanting
            facets of this vibrant destination. Our tourism website is your
            gateway to exploring this enchanting destination, where pristine
            beaches, lush greenery, delectable cuisine, and a tapestry of
            traditions await.
          </p>
        </div>
      </div>
    </>
  );
}

export default InfoSection;
