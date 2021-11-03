import React from "react";
import image from ".././images/image3.jpg";

import ".././App.css";

const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h3>01.About</h3>
          <p>Who I am and What I want to Accomplish</p>
        </div>
      </div>
      <div className="row aboutContent" style={{border: "1px solid red" }}>
        <div className="col-5 p-0 text-end imageContainer" style={{border: "1px solid blue" }}>
          <img
            className="img-fluid aboutImage "
            src={image}
            alt="about-image"
            // style={{minHeight:"100%", width:"auto"}}
          ></img>
        </div>
        <div className="col-7 card px-5 cardOverlap" style={{border: "1px solid blue" }}>
          {/* <div className="card px-5 "> */}
            <div className="card-body">
              <h5 className="card-title">
                I want to build things that makes life better for everyone.
              </h5>
            </div>
          {/* </div> */}
        </div>
      </div>
      <div className="row visually-hidden">
        <div className="col">
          <h4>Stephen's Toolbox</h4>
        </div>
      </div>
      <div className="row visually-hidden">
        <div className="col">
          <div className="card h-100"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
