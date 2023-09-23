import React from 'react';
import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import beachimg from "../assets/images/beach1.jpg";
import Header from '../components/Header';
import "../components/comp-styles/Beaches.css";

function Beaches() {
  return (
    <>
    <Header />
    <input type="search" className='search-each' id="" placeholder='Search' />
     <h4 className='top-line'>From secluded coves to vibrant coastal hubs, our tourism website showcases an array of exquisite beach destinations, ensuring you'll find the ideal seaside escape for relaxation and adventure.</h4>
    <section className="beaches-section">
          <div className="beaches-cards">
          <img src={beachimg} />
          <Link to = '/beachinfo'>
            <p>Name Of the Beach</p>
            <p>Location</p>
            </Link>
            <p>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </p>
          </div>
          <div className="beaches-cards">
            <img src={beachimg} />
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
          <div className="beaches-cards">
            <img src={beachimg} />
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
          <div className="beaches-cards">
            <img src={beachimg} />
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
          <div className="beaches-cards">
            <img src={beachimg} />
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
          <div className="beaches-cards">
            <img src={beachimg} />
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
          <div className="beaches-cards">
            <img src={beachimg} />
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
          <div className="beaches-cards">
            <img src={beachimg} />
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
          <div className="beaches-cards">
            <img src={beachimg} />
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
          <div className="beaches-cards">
            <img src={beachimg} />
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
          {/* <Routes>
            <Route path= "/beachinfo" element = {<BeachInfo/>}></Route>
          </Routes> */}
      </section>
    </>
  )
}

export default Beaches