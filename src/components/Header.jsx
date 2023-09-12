import React from "react";
import { FaUmbrellaBeach } from "react-icons/fa";
import { GiParkBench } from "react-icons/gi";
import { LuHotel } from "react-icons/lu";
import { MdOutlineTempleHindu } from "react-icons/md";
import "./comp-styles/Header.css";

function Header() {
  return (
    <>
      <header>
        <h2>TourMyMangalore.in</h2>

        <nav>
          <ul>
            <li>
              <FaUmbrellaBeach />
              <a href="#"> Beaches</a>
            </li>
            <li>
              <LuHotel />
              <a href="#"> Hotels</a>
            </li>
            <li>
              <MdOutlineTempleHindu />
              <a href="#"> Religious Places</a>
            </li>
            <li>
              <GiParkBench />
              <a href="#"> Parks</a>
            </li>
            <li>
              <GiParkBench />
              <a href="#"> Live Events</a>
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
