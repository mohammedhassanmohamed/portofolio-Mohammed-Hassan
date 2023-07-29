import "./Imagedynamic.css";
import React from "react";
import foto from "./assets/2396-6.jpg";
import projectfoto from "./assets/ma-pro.PNG"
export default function Imagedynamic(props) {
  return (
    <>
      <div className="all-padge">
        <img className="foto" src={foto} alt="project4.jpg" />
        <div className="empty-background"></div>
        <div className="p-h1-twobtn">
          <h1 className="myh1">{props.heading}</h1>
        
          <p className="para"> {props.text}</p>
          <p className="para"> {props.name}</p>
          <p className="para"> {props.profile}</p>
          <p className="para"> {props.email}</p>
          <p className="para"> {props.phone}</p>


<div className="all-svg">
<div id="cont" data-pct="">
<svg id="svg" width="300" height="180" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <circle r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset="0"></circle>
  <circle id="bar" r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset="0"></circle>
</svg>
</div>

<div id="cont1" data-pct="">
<svg id="svg" width="300" height="160" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <circle r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset="0"></circle>
  <circle id="bar" r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset="0"></circle>
</svg>
</div>
<div id="cont2" data-pct="">
<svg id="svg" width="300" height="150" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <circle r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset="0"></circle>
  <circle id="bar" r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset="0"></circle>
</svg>
</div>
<div id="cont3" data-pct="">
<svg id="svg" width="300" height="140" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <circle r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset="0"></circle>
  <circle id="bar" r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset="0"></circle>
</svg>
</div>
<div id="cont4" data-pct="">
<svg id="svg" width="300" height="170" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <circle r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset="0"></circle>
  <circle id="bar" r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset="0"></circle>
</svg>
</div>

</div>    

      </div>
             
      </div>
    </>
  );
}
