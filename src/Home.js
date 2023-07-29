import React from 'react'
import img1 from "./assets/intro-bg.jpg"
import "./Home.css";
import { Link, NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
<div className='image-bg'>
<img  src={img1} alt='intro-bg.jpg'/>
<div className='empty-background'></div>

</div>
<div className='p-h1-twobtn'>
<p className='para'>hi i'm  mohammed hassan</p>
<h1 className='myh1'>react developer.</h1>

<div className='two-button'>
<Link className="btn-project" to="/Project">Projects</Link> 
<Link className='btn-contact' to="/contact">Contact</Link> 
</div>
</div>
    </>
  )
}
