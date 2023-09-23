import React from 'react';
import { FaRegStar, FaStar } from "react-icons/fa";
import clubimg from "../assets/images/club1.jpeg";
import Header from '../components/Header';
import "../components/comp-styles/Clubs.css";

function Clubs() {
  return (
    <>
    <Header />
    <input type="search" className='search-each' id="" placeholder='Search' />
     <h4 className='top-line'>Whether you're into electronic music, live bands, or trendy rooftop venues, our tourism website features an eclectic selection of clubs that cater to all tastes, ensuring an exhilarating nightlife experience for every traveler.</h4>
    <section className="clubs-section">
          <div className="clubs-cards">
            <img src={clubimg} />
            <p>Name Of the Beach</p>
            <p>Location</p>
            <p>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </p>
          </div>
          <div className="clubs-cards">
            <img src={clubimg} />
            <p>Name Of the Beach</p>
            <p>Location</p>
            <p>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </p>
          </div>
          <div className="clubs-cards">
            <img src={clubimg} />
            <p>Name Of the Beach</p>
            <p>Location</p>
            <p>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </p>
          </div>
          <div className="clubs-cards">
            <img src={clubimg} />
            <p>Name Of the Beach</p>
            <p>Location</p>
            <p>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </p>
          </div>
          <div className="clubs-cards">
            <img src={clubimg} />
            <p>Name Of the Beach</p>
            <p>Location</p>
            <p>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </p>
          </div>
          <div className="clubs-cards">
            <img src={clubimg} />
            <p>Name Of the Beach</p>
            <p>Location</p>
            <p>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </p>
          </div>
          <div className="clubs-cards">
            <img src={clubimg} />
            <p>Name Of the Beach</p>
            <p>Location</p>
            <p>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </p>
          </div>
          <div className="clubs-cards">
            <img src={clubimg} />
            <p>Name Of the Beach</p>
            <p>Location</p>
            <p>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </p>
          </div>
          <div className="clubs-cards">
            <img src={clubimg} />
            <p>Name Of the Beach</p>
            <p>Location</p>
            <p>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </p>
          </div>
          <div className="clubs-cards">
            <img src={clubimg} />
            <p>Name Of the Beach</p>
            <p>Location</p>
            <p>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </p>
          </div>
      </section>
    </>
  )
}

export default Clubs