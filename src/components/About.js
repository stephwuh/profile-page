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
      <div className="row aboutContent">
        <div className="col-5 px-0 py-3 text-end imageContainer">
          <img
            className="img-fluid shadow p-2 mb-5 bg-body rounded aboutImage "
            src={image}
            alt="about-image"
          ></img>
        </div>
        <div className="col-7 card px-5 shadow p-3 bg-body rounded cardOverlap">
          <div className="card-body">
            <h5 className="card-title">
              I want to build things that makes life better for everyone.
            </h5>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h4>Stephen's Toolbox</h4>
        </div>
      </div>
      <div className="row">
        <div className="col card shadow bg-body rounded py-4">

           {/* desktop version */}

          <div
            id="carouselExampleIndicators"
            className="carousel slide d-none d-lg-block"
            data-bs-ride="false"
            // data-bs-pause='true'
          >
           

            <div
              className="carousel-inner"
              // className={window.innerWidth <= 576 ? "d-none" : ""}
            >
              <div className="carousel-item active">
                <div className="row justify-content-center">
                  <div className="col-1 mx-3">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                      className="d-block w-100"
                    />
                  </div>
                  <div className="col-1 mx-3">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
                      className="d-block w-100"
                    />
                  </div>
                  <div className="col-1 mx-3">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
                      className="d-block w-100"
                    />
                  </div>
                  <div className="col-1 mx-3">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                      className="d-block w-100"
                    />
                  </div>
                  <div className="col-1 mx-3">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                      className="d-block w-100"
                    />
                  </div>
                  <div className="col-1 mx-3">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg"
                      className="d-block w-100"
                    />
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row justify-content-center">
                  <div className="col-1 mx-3">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
                      className="d-block w-100"
                    />
                  </div>
                  <div className="col-1 mx-3">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original-wordmark.svg"
                      className="d-block w-100"
                    />
                  </div>
                  <div className="col-1 mx-3">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
                      className="d-block w-100"
                    />
                  </div>
                  <div className="col-1 mx-3">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
                      alt="Jest"
                      className="d-block w-100"
                    />
                  </div>
                  <div className="col-1 mx-3">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
                      alt="Material UI"
                      className="d-block w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
            </button>
          </div>

        {/* mobile version */}


          <div
            id="carouselExampleIndicators2"
            className="carousel slide d-lg-none"
            data-bs-ride="false"
            // data-bs-pause='true'
          >


           

            <div
              className="carousel-inner "
              // className={window.innerWidth > 576 ? "d-none" : ""}
            >
              <div className="carousel-item active">
                <div className="row justify-content-center">
                  <div className="col-2 mx-3">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                      className="d-block w-100"
                    />
                  </div>
                  <div className="col-2 mx-3">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
                      className="d-block w-100"
                    />
                  </div>
                  <div className="col-2 mx-3">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
                      className="d-block w-100"
                    />
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row justify-content-center">
                  <div className="col-2 mx-3">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                      className="d-block w-100"
                    />
                  </div>
                  <div className="col-2 mx-3">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                      className="d-block w-100"
                    />
                  </div>
                  <div className="col-2 mx-3">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg"
                      className="d-block w-100"
                    />
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row justify-content-center">
                  <div className="col-2 mx-3">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
                      className="d-block w-100"
                    />
                  </div>
                  <div className="col-2 mx-3">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original-wordmark.svg"
                      className="d-block w-100"
                    />
                  </div>
                  <div className="col-2 mx-3">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
                      className="d-block w-100"
                    />
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row justify-content-center">
                  <div className="col-2 mx-3">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
                      alt="Jest"
                      className="d-block w-100"
                    />
                  </div>
                  <div className="col-2 mx-3">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
                      alt="Material UI"
                      className="d-block w-100"
                    />
                  </div>
                </div>
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators2"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators2"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
            </button>
          </div>


        </div>
      </div>
    </div>
  );
};

export default About;
