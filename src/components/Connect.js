import React from "react";

import image from ".././images/image4.jpg";

const Connect = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col text-center">
          <h3>03.Connect</h3>
          <p>Let's get in touch</p>
        </div>
      </div>
      <div className="row flex-wrap-reverse justify-content-center">
        <div className="col-7 card px-5 shadow p-3 bg-body rounded connectCard">
          <div className="card-body">
            <h5 className="card-title">
              I want to build things that makes life better for everyone.
            </h5>
            <p class="card-text">
              I know... It sounds cliche.
              <br />
              But hear me out.
              <br />
              <br />
              We are living in an age of dizzying technological advancement.
            </p>
          </div>
        </div>
        <div className="col-5 px-0 py-3 connectImage">
          <img
            className="img-fluid shadow p-2 bg-body rounded"
            src={image}
            alt="connect-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Connect;
