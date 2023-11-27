// import React from "react";
// import { signInWithPopup } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { FaUmbrellaBeach } from "react-icons/fa";
import { GiJugglingClubs, GiParkBench } from 'react-icons/gi';
import { IoMdRestaurant } from 'react-icons/io';
import { LuHotel } from 'react-icons/lu';
import { MdOutlineLiveTv, MdOutlineTempleHindu } from 'react-icons/md';
import { Link } from "react-router-dom";
import Logo from '../assets/icons/TourMyMangaloreLogo3Offi.svg';
import altLogo from '../assets/icons/TourMyMangalore-logos_black.png'
import SignIn from "./SignIn";
import {TfiMenu} from 'react-icons/tfi'
// import { auth, provider } from "../config.js";
// import "./comp-styles/Header.css";
 




function Header() {

  const [menu,setMenu] = useState(false)
 
  return (
    <>
      <header >
        <Link to="/">
          <img className="Logo"  src={Logo } alt="" />
        </Link>
        <nav className={menu ?  "header-section-mobile" : "header-section"}>
          <ul className="header-navs">
            <li>
            <FaUmbrellaBeach className="hover-change-icon" />
              <Link to="/beach">
                <p>Beaches</p>
              </Link>
            </li>
            <li>
              <LuHotel className="hover-change-icon" />
              <Link to="/hotels">
                <p>Hotels</p>
              </Link>
            </li>
            <li>
              <MdOutlineTempleHindu className="hover-change-icon" />
              <Link to="/religious">
                <p>Religious Places</p>
              </Link>
            </li>
            <li>
              <GiParkBench className="hover-change-icon" />
              <Link to="/parks">
                {" "}
                <p>Parks</p>
              </Link>
            </li>
            <li>
              <IoMdRestaurant className="hover-change-icon" />
              <Link to="/restaurants">
                {" "}
                <p>Restaurants</p>
              </Link>
            </li>
            <li>
              <GiJugglingClubs className="hover-change-icon" />
              <Link to="/clubs">
                {" "}
                <p>Clubs</p>
              </Link>
            </li>
            <li>
              <MdOutlineLiveTv className="hover-change-icon" />
              <Link to="/live">
                {" "}
                <span className="live">
                  <p>Live Events!</p>
                </span>
              </Link>
            </li>
            <li>
              {/* {signIn ? (
                <div onClick={userSignOut} className="user-div">
                  |
                  <img src={localStorage.getItem("profilePic")} alt="" />
                  <h2>Logout</h2>
                </div>
              ) : (
                <button className="signIn-btn" onClick={GoogleSignIn}>Sign In</button>
              )} */}
              <SignIn/>
             </li>
          </ul>
         
        </nav>
        <div className="hamburger-menu">
            <TfiMenu onClick={() => {
              setMenu(!menu)
            }}/>
          </div>
      </header>
    </>
  );
}

export default Header;
