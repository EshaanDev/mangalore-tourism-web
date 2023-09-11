import React from "react";
import { FaUmbrellaBeach } from "react-icons/fa";
import { FcSportsMode } from "react-icons/fc";
import { GiParkBench } from 'react-icons/gi';
import { LuHotel } from 'react-icons/lu';
import { MdOutlineTempleHindu } from 'react-icons/md';
import "./comp-styles/Header.css";

function Header() {
  return (
    <>
      <header>
        
        <h1>TourMyMangalore</h1>
       
        <nav>
          <ul>
            <li>
              <a href="">
                {" "}
                <FaUmbrellaBeach />  Beaches
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <LuHotel />  Hotels
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <MdOutlineTempleHindu /> Religious Places
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <GiParkBench /> Parks
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <FcSportsMode /> Religious Places
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <FcSportsMode /> Religious Places
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <FcSportsMode /> Religious Places
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
