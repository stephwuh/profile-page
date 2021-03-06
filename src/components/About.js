import React from "react";
import image from ".././images/image2.jpg";

import ".././App.css";

const About = () => {
  return (
    <div className="container gx-0 py-5">
      <div className="row">
        <div className="col text-center">
          <h2>01.About</h2>
          <p>Who I am, and What I Want to Accomplish</p>
        </div>
      </div>
      <div className="row flex-wrap justify-content-center">
        <div className="col-5 px-0 aboutImage">
          <img
            className="img-fluid shadow p-2 bg-body rounded"
            src={image}
            alt="about-image"
          ></img>
        </div>
        <div className="col-7 card px-5 shadow p-3 bg-body rounded aboutCard">
          <div className="card-body">
            <h5 className="card-title">
              I am a full-stack web developer who wants to build web applications that
              make life better for everyone.
            </h5>
            <p className="card-text">
            My interest in web development grew from my love for the science fiction genre, particularly stories about the interplay between mankind and technology. This interest led me to pick up my first programming language (JavaScript), but I realized I had a genuine passion for
              building software when I found myself engrossed in the process of
              envisioning a product, building it, and seeing it work before my
              very own eyes!
              <em>
                {" "}
                Creating something that does something cool is truly very
                satisfying and empowering.
              </em>
            </p>
            <p className="card-text">
              However, I also realize that with all the benefits of technology
              comes harmful side effects as well, intended or unintended, which
              pose a threat to the global community, i.e. , global warming,
              social inequality, cyber security threats, etc. Given this powerful tool, I strive to be a good steward of this technology to play a part in mitigating global challenges and moving towards a more prosperous future.
            </p>
            <p className="card-text">
            Prior to becoming a web developer, I graduated from the University of Michigan with a BA in Economics and worked as a financial planning analyst in the automotive industry. In my spare time, I like to consume stories (fiction/non-fiction) in various formats (books/audio/video) and hit the gym to run and lift weights.   
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col mt-5 mb-3 text-center">
          <h3>Stephen's Toolbox</h3>
        </div>
      </div>
      <div className="row justify-content-center ">
        <div className="col card shadow bg-body rounded py-4 w-75">
          {/* desktop version */}

          <div
            id="carouselExampleIndicators"
            className="carousel slide d-none d-lg-block"
            data-bs-ride="false"
            // data-bs-pause='true'
          >
            <div className="carousel-inner">
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
