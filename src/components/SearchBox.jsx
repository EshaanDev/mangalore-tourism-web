import React from 'react'
import './comp-styles/SearchBox.css'
function SearchBox() {
  return (
   <>
   <div className="search-section">
     {/* <img src={logo} alt="" /> */}
     {/* <AiOutlineSearch style={{marginLeft: "21rem", position: "absolute"}} color="gray" size="1.5em"/> */}
   <input className = "searchbar" type="search" placeholder="Search" />
    
   </div>
   </>
  )
}

export default SearchBox