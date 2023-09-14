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
       <h2>TourMyMangalore</h2>
        <nav>
          <ul>
            <li>
            <FaUmbrellaBeach size={'15px'} />
              <a href="">
                {" "}
                  Beaches
              </a>
            </li>
            <li>
            <LuHotel size={'15px'}/>
              <a href="">
                {" "}
                  Hotels
              </a>
            </li>
            <li>
            <MdOutlineTempleHindu size={'15px'}/>
              <a href="">
                {" "}
                 Religious Places
              </a>
            </li>
            <li>
            <GiParkBench size={'15px'} />
              <a href="">
                {" "}
                 Parks
              </a>
            </li>
            <li>
            <IoMdRestaurant size={'15px'}/>
              <a href="">
                {" "}
                 Restaurants
              </a>
            </li>
            <li>
            <GiJugglingClubs size={'15px'}/>
              <a href="">
                {" "}
                 Clubs
              </a>
            </li>
            <li>
            <MdOutlineLiveTv size={'15px'}/>
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
