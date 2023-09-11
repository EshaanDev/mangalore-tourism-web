import React from "react";
import { BsPencil, BsBookmarkCheck } from "react-icons/bs";
import logo from '../assets/icons/logo.jpg'
import { FcSportsMode } from "react-icons/fc";
import { AiOutlineSearch } from "react-icons/ai";
import { GiPalmTree } from "react-icons/gi";
import "./comp-styles/Header.css";

function Header() {
  return (
    <>
      <header>
        
        <h1>TourMyMangalore</h1>
        {/* <img src={logo} alt="" /> */}
        {/* <AiOutlineSearch style={{marginLeft: "21rem", position: "absolute"}} color="gray" size="1.5em"/> */}
        <input type="search" placeholder="Search" />

        <nav>
          <ul>
            <li>
              <a href="">
                {" "}
                <BsPencil /> Review
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <BsBookmarkCheck /> Bookmarks
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <FcSportsMode /> Things to do
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
