// import React from "react";
import { FaUmbrellaBeach } from "react-icons/fa";
import { GiJugglingClubs, GiParkBench } from "react-icons/gi";
import { IoMdRestaurant } from "react-icons/io";
import { LuHotel } from "react-icons/lu";
import { MdOutlineLiveTv, MdOutlineTempleHindu } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../config.js";
import Logo from "../assets/icons/TourMyMangalore-logos_black.png";

import "./comp-styles/Header.css";

function Header() {
  const [signIn, setSignIn] = useState(false);
  const [signOut, setSignOut] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setSignIn(!signIn);
        setSignOut(!signOut);
      } else {
      }
    });
  }, []);

  const userSignOut = () => {
    auth.signOut();
    // alert("Logged out, Please refresh the page");
    window.location.reload(false);
  };

  const GoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        const profilePic = data.user.photoURL;
        localStorage.setItem("profilePic", profilePic);
      })
      .catch((err) => {});
  };

  return (
    <>
      <header>
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <nav>
          <ul>
            <li>
              {/* <FaUmbrellaBeach /> */}
              <Link to="/beach">
                <p>Beaches</p>
              </Link>
            </li>
            <li>
              {/* <LuHotel /> */}
              <Link to="/hotels">
                <p>Hotels</p>
              </Link>
            </li>
            <li>
              {/* <MdOutlineTempleHindu /> */}
              <Link to="/religious">
                <p>Religious Places</p>{" "}
              </Link>
            </li>
            <li>
              {/* <GiParkBench /> */}
              <Link to="/parks">
                {" "}
                <p>Parks</p>
              </Link>
            </li>
            <li>
              {/* <IoMdRestaurant /> */}
              <Link to="/restaurants">
                {" "}
                <p>Restaurants</p>
              </Link>
            </li>
            <li>
              {/* <GiJugglingClubs /> */}
              <Link to="/clubs">
                {" "}
                <p>Clubs</p>
              </Link>
            </li>
            <li>
              {/* <MdOutlineLiveTv /> */}
              <Link to="/live">
                {" "}
                <span className="live">
                  <p>Live Events!</p>
                </span>
              </Link>
            </li>
            <li>
              {signIn ? (
                <div onClick={userSignOut} className="user-div">
                  |
                  <img src={localStorage.getItem("profilePic")} alt="" />
                  <h2>Logout</h2>
                </div>
              ) : (
                <button onClick={GoogleSignIn}>Sign In</button>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
