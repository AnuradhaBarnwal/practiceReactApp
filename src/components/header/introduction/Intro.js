import React from "react";
import "../introduction/Intro.css";
import image1 from "../../../assets/images/Ashray1.png";

function Intro() {
  return (
    <div className="intro">
      <div className="photo">
        <img src={image1} className="person"></img>

        <div className="name">
          <h1>Amarnath Barnwal</h1>
          <h3>Real Estate</h3>
        </div>
      </div>
    </div>
  );
}

export default Intro;
