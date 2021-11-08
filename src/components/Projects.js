import React, { useState } from "react";

import ProjectsDialog from "./ProjectsDialog.js";

import projectInfo from "./projectInfo.js";

const Project = () => {
  const [openProj1, setOpenProj1] = useState(false);
  const [openProj2, setOpenProj2] = useState(false);
  const [openProj3, setOpenProj3] = useState(false);

  const handleClickOpen1 = () => {
    setOpenProj1(true);
  };

  const handleClose1 = () => {
    setOpenProj1(false);
  };

  const handleClickOpen2 = () => {
    setOpenProj2(true);
  };

  const handleClose2 = () => {
    setOpenProj2(false);
  };

  const handleClickOpen3 = () => {
    setOpenProj3(true);
  };

  const handleClose3 = () => {
    setOpenProj3(false);
  };

  return (
    <div className="projBg">
      <div className="container gx-0 py-5">
        <div className="row">
          <div className="col text-center">
            <h3>02.Projects</h3>
            <p>What I've Worked on in the Past</p>
          </div>
        </div>
        <div className="row justify-content-center">
          {projectInfo.map((project, index) => {
            return (
              <>
                <div
                  className="col-4 card px-5 shadow p-3 bg-body rounded mx-1 my-2"
                  style={{ width: "33rem" }}
                  key={index}
                >
                  <img
                    src={project.image[0]}
                    className="card-img-top"
                    alt="project image"
                  />
                  <div class="card-body px-0">
                    <h5 class="card-title">{project.title}</h5>
                    <p class="card-text">{project.description}</p>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={eval(`handleClickOpen${index + 1}`)}
                    >
                      View
                    </button>
                  </div>
                </div>
                <ProjectsDialog
                  open={eval(`openProj${index + 1}`)}
                  onClose={eval(`handleClose${index + 1}`)}
                  details={project}
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
