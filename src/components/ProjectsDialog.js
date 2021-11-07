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

  // const images = details.image.map()

  return (
    <Dialog onClose={handleClose} open={open} maxWidth="md">
      <div className="container">
        <div className="row">
          <div className="col">
            <DialogTitle className="text-center">{details.title}</DialogTitle>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            {details.video !== "" && 
              <>
                <div style={{padding:'50.42% 0 0 0', position: 'relative', border: '1px solid #D3D3D3', boxShadow: '2px 2px #D3D3D3'}}>
                  <iframe
                    src={details.video}
                    frameborder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowfullscreen
                    style={{position: 'absolute', top:'0', left:'0', width:'100%',height:'100%'}}
                  ></iframe>
                </div>
                <script src="https://player.vimeo.com/api/player.js"></script>
              </>
            }
            {details.video === "" &&
            <img src={details.image[0]} alt="image" className="img-fluid" />
            }
            
          </div>
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
