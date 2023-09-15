// import React from "react";
import { signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import { FaUmbrellaBeach } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { auth, provider } from "../config.js";

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
        <Link to='/'>    
       <h1 className="tour" >TourMyMangalore</h1>
       </Link>
        <nav>
          <ul>
            <li>
              <FaUmbrellaBeach />
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
