import React, { useState } from "react";
import MenuIcon from '@material-ui/icons/Menu';

import CloseIcon from '@material-ui/icons/Close';
import "../navbar/Navbar.css";
import image from "../../../assets/images/Ashray4.png";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const handleClick = () => setShowLinks(!showLinks);


  return (
    <div className="Navbar">
      <div className="navIcon">
        <div className="icon">
          <img src={image} className="logo"></img>
        </div>
      </div>
      <div className="navLinks">
        <div className="links" id={showLinks ? "hidden" : " "}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>
        <button onClick={handleClick }> 
        <MenuIcon/> </button>
        {/* <button onClick={handleClick }> 
        <CloseIcon/></button> */}
        
       
      </div>
    </div>
  );
}

export default Navbar;
