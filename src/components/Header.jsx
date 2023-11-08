// import React from "react";
// import { signInWithPopup } from "firebase/auth";
import React from "react";
import { FaUmbrellaBeach } from "react-icons/fa";
import { GiJugglingClubs, GiParkBench } from 'react-icons/gi';
import { IoMdRestaurant } from 'react-icons/io';
import { LuHotel } from 'react-icons/lu';
import { MdOutlineLiveTv, MdOutlineTempleHindu } from 'react-icons/md';
import { Link } from "react-router-dom";
import Logo from '../assets/icons/TourMyMangaloreLogo3Offi.svg';
import SignIn from "./SignIn";
// import { auth, provider } from "../config.js";
// import "./comp-styles/Header.css";
 



function Header() {
 
  return (
    <>
      <header>
        <Link to="/">
          <img className="Logo"  src={Logo} alt="" />
        </Link>
        <nav>
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

      </header>
    </>
  );
}

export default Header;
