import React from "react";
import { FaUmbrellaBeach } from "react-icons/fa";
import { GiJugglingClubs, GiParkBench } from 'react-icons/gi';
import { IoMdRestaurant } from 'react-icons/io';
import { LuHotel } from 'react-icons/lu';
import {Logo} from '../assets/icons/Logo.svg'
import { MdOutlineLiveTv, MdOutlineTempleHindu } from 'react-icons/md';

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
              </a>
            </li>
            <li>
            <LuHotel />
              <a href="">
                {" "}
                  Hotels
              </a>
            </li>
            <li>
            <MdOutlineTempleHindu />
              <a href="">
                {" "}
                 Religious Places
              </a>
            </li>
            <li>
            <GiParkBench />
              <a href="">
                {" "}
                 Parks
              </a>
            </li>
            <li>
            <IoMdRestaurant />
              <a href="">
                {" "}
                 Restaurants
              </a>
            </li>
            <li>
            <GiJugglingClubs />
              <a href="">
                {" "}
                 Clubs
              </a>
            </li>
            <li>
            <MdOutlineLiveTv />
              <a href="">
                {" "}
                 <span className="live">Live Events</span>
              </a>
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
