import React from "react";

import dc1 from ".././images/project/dc1.PNG";
import jat1 from ".././images/project/jat1.PNG";
import td1 from ".././images/project/td1.PNG";

const projectArr = [
  {
    image: dc1,
    title: "Digital Closet",
    description: "Full stack app that helps users dress stylishly.",
  },
  {
    image: jat1,
    title: "Job Application Tracker",
    description: "Allows users to track their job applications",
  },
  {
    image: td1,
    title: "Stick Note To-do List",
    description:
      "Users are able to create, save, and delete to-do items in the form of stick notes",
  },
];

const Project = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h3>Projects</h3>
          <p>What I've been working on</p>
        </div>
      </div>
      <div className="row">
        {projectArr.map((project, index) => {
          return (
            <div className="col-4 card px-5 shadow p-3 bg-body rounded mx-1" style={{width: '22rem'}} key={index}>
              <img
                src={project.image}
                className="card-img-top"
                alt="project image"
              />
              <div class="card-body">
                <h5 class="card-title">{project.title}</h5>
                <p class="card-text">{project.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
