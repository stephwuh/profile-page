import React from "react";

import PropTypes from "prop-types";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

export default function ProjectsDialog(props) {
  const { onClose, open, details } = props;

  const handleClose = () => {
    onClose();
  };

  const newDetails = details.details.split("\n").map((str) => <li>{str}</li>);

  const newImages = [...details.image];
  newImages.shift();

  return (
    <Dialog onClose={handleClose} open={open} maxWidth="md" p-3>
      <div className="container">
        <div className="row">
          <div className="col">
            <DialogTitle className="text-center">{details.title}</DialogTitle>
          </div>
        </div>
        <div className="row justify-content-center">
          {details.video !== "" && (
            <div className="col">
              <div
                style={{
                  padding: "50.42% 0 0 0",
                  position: "relative",
                  border: "1px solid #D3D3D3",
                  // boxShadow: "2px 2px #D3D3D3",
                }}
              >
                <iframe
                  src={details.video}
                  frameborder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowfullscreen
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                  }}
                ></iframe>
              </div>
              <script src="https://player.vimeo.com/api/player.js"></script>
            </div>
          )}
          {details.video === "" && (
            <div className="col p-3" >
              <div
                id="carouselExampleControls"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active" >
                    <img
                      src={details.image[0]}
                      alt="project-image"
                      className="img-fluid border"
                      
                    />
                  </div>

                  {newImages.map((photo, index) => {
                    return (
                      <div class="carousel-item" key={index}>
                        <img
                          src={photo}
                          className="d-block w-100"
                          alt="project-image"
                        />
                      </div>
                    );
                  })}
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="row">
          <div className="col">
            <h5>Tools Used</h5>
            <ul>
              <li>{details.tech}</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h5>Description</h5>
            <ul>{newDetails}</ul>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h5>Source Code</h5>
            <ul>
              <li>
                <a
                  href={details.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {details.github}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

ProjectsDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
