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
       <h1>TourMyMangalore</h1>
        <nav>
          <ul>
            <li>
            <FaUmbrellaBeach />
              <a href="">
                {" "}
                  Beaches
                </Link>
            </li>
            <li>
            <LuHotel />
              <a href="">
                {" "}
                  Hotels
              </Link>
            </li>
            <li>
            <MdOutlineTempleHindu />
              <a href="">
                {" "}
                 Religious Places
              </Link>
            </li>
            <li>
            <GiParkBench />
              <a href="">
                {" "}
                 Parks
              </Link>
            </li>
            <li>
            <IoMdRestaurant />
              <a href="">
                {" "}
                 Restaurants
              </Link>
            </li>
            <li>
            <GiJugglingClubs />
              <a href="">
                {" "}
                 Clubs
              </Link>
            </li>
            <li>
            <MdOutlineLiveTv />
              <a href="">
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
