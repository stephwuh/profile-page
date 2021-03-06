import React, { useState } from "react";

import ProjectsDialog from "./ProjectsDialog.js";

import projectInfo from "./projectInfo.js";

const Project = () => {
  const [openProj1, setOpenProj1] = useState(false);
  const [openProj2, setOpenProj2] = useState(false);
  const [openProj3, setOpenProj3] = useState(false);
  const [openProj4, setOpenProj4] = useState(false);

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

  const handleClickOpen4 = () => {
    setOpenProj4(true);
  };

  const handleClose4 = () => {
    setOpenProj4(false);
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
                    className="card-img-top mt-3 h-50"
                    alt="project image"
                  />
                  <div className="card-body px-0">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text h-50">{project.description}</p>
                    <div className="d-flex justify-content-between">
                      <button
                        type="button"
                        className="btn btn-secondary card-button"
                        onClick={eval(`handleClickOpen${index + 1}`)}
                      >
                        Details
                      </button>
                      <a
                        role="button"
                        className="btn btn-primary live card-button"
                        href={project.website === "" ? null : project.website}
                        target="_blank"
                      >
                        Live
                      </a>
                    </div>
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
