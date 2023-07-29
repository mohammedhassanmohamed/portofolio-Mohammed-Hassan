import React from "react";
import Imagedynamic from "../Imagedynamic";
import moahmmedfoto from"../assets/received_457698578514765.jpeg";
import "./Aboutus.css";
const Aboutus = () => {
  return (
    <>
      <div className="all-padge">
        <Imagedynamic
          heading="ABOUT."
          text="Im afriendly Front-End Developer "
          name="Name:Mohammed Hassan"
          profile="Profile: front-End developer"
          email="Email:mohammed.hassan.01029632345@gmail.com"
          phone="Phone: +201029632345"
        />
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
