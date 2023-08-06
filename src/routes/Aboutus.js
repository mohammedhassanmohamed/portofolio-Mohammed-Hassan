import React from "react";
import Imagedynamic from "../Imagedynamic";
import moahmmedfoto from"../assets/received_457698578514765.jpeg";
import foto from "../assets/2396-6.jpg";
import "./Aboutus.css";
const Aboutus = () => {

  return (
    <>
      <div className="all-padge">
      <img className="foto" src={foto} alt="project4.jpg" />
      <div className="empty-background"></div>
        <div className="p-h1-twobtn">
          <h1 className="myh1">ABOUT</h1>
        
          <p className="para"> Im afriendly Front-End Developer </p>
          <p className="para"> Name:Mohammed Hassan</p>
          <p className="para">Profile: front-End developer</p>
          <p className="para">Email:mohammed.hassan.01029632345@gmail.com</p>
          <p className="para"> Phone: +201029632345</p>
</div>

        
        {/* <div className="my-personal-foto-div"> */}
          <img className="personal-foto" width="200px" src={moahmmedfoto} alt="my-personal-photo"/>
          {/* </div> */}
      
      </div>
      <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
    </>
  
  );
};

export default Aboutus;
