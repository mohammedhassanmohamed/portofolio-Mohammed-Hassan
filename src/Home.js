import React, { useState, useEffect } from "react"
import img1 from "./assets/intro-bg.jpg"
import "./Home.css";
import { Link, NavLink } from "react-router-dom";
import Typed from "react-typed";

export default function Home() {


  useEffect(() => {


  
  }, [])
  


  return (
    <>
<div className="image-bg">
<img  src={img1} alt= "intro"/>
<div className="empty-background"></div>

</div>
<div className="p-h1-twobtn">


<p className="para">
<Typed
strings={["hi im  Mohammed Hassan"]}
typeSpeed={150}
backSpeed={100}
loop

/>


</p>
<h1 className="myh1"><Typed
strings={["react developer."]}
typeSpeed={200}
backSpeed={150}
loop

/>
</h1>

<div className="two-button">
<Link className="btn-project" to="/Project">Projects</Link> 
<Link className="btn-contact" to="/contact">Contact</Link> 
</div>
</div>
    </>
  )
}
