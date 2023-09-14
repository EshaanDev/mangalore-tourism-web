import React from "react";
import { FaUmbrellaBeach } from "react-icons/fa";
import { GiJugglingClubs, GiParkBench } from 'react-icons/gi';
import { IoMdRestaurant } from 'react-icons/io';
import { LuHotel } from 'react-icons/lu';
import { MdOutlineLiveTv, MdOutlineTempleHindu } from 'react-icons/md';
import { Link } from 'react-router-dom';

import "./comp-styles/Header.css";

function Header() {
  return (
    <>
      <header> 
        <Link to='/'>    
       <h1>TourMyMangalore</h1>
       </Link>
        <nav>
          <ul>
            <li>
            <FaUmbrellaBeach />
              <Link to = '/beach' >
                  Beaches
                </Link>
            </li>
            <li>
            <LuHotel />
              <Link to = "/hotels">
                  Hotels
              </Link>
            </li>
            <li>
            <MdOutlineTempleHindu />
             <Link to = "/religious">
                 Religious Places
              </Link>
            </li>
            <li>
            <GiParkBench />
              <Link to = "/parks">
                {" "}
                 Parks
              </Link>
            </li>
            <li>
            <IoMdRestaurant />
              <Link to = "/restaurants">
                {" "}
                 Restaurants
              </Link>
            </li>
            <li>
            <GiJugglingClubs />
              <Link to = "/clubs">
                {" "}
                 Clubs
              </Link>
            </li>
            <li>
            <MdOutlineLiveTv />
              <Link to = "/live">
                {" "}
                 <span className="live">Live Events</span>
             </Link>
            </li>
            <li>
              <button>Sign In</button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
