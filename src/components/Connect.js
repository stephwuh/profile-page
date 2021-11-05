import React from "react";

import image from '.././images/image4.jpg';

const Connect = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h3>03.Connect</h3>
          <p>Let's get in touch</p>
        </div>
      </div>
      <div className="row aboutContent">
        
        <div className="col-7 card px-5 shadow p-3 bg-body rounded cardOverlap">
          <div className="card-body">
            <h5 className="card-title">
              I want to build things that makes life better for everyone.
            </h5>
          </div>
        </div>
        <div className="col-5 px-0 py-3 text-end imageContainer">
          <img
            className="img-fluid shadow p-2 mb-5 bg-body rounded aboutImage "
            src={image}
            alt="about-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Connect;
