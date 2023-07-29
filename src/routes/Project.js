import React from "react";
import Imagedynamic from "../Imagedynamic";
import projectfoto from "../assets/ma-pro.PNG";
import "../routes/Project.css";
const Project = () => {
  return (
    <>
      <div className="all-padge">
        <Imagedynamic heading="PROJECTS" text="some of my most recent works" />
        <div id="image-project">
          <a href="https://productions-project-ecommerce.vercel.app/" target="_blank">
            <img className="projectfoto" src={projectfoto} alt="projectfoto"  />
      
          </a>
        </div>
      
      </div>
    </>
  );
};

export default Project;
