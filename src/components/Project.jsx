import React from "react";

// Tile receives the information of a single project as props from Projects, formats it, and returns.
const Project = props => {
  let project = props.project;
  return (
    <>
      <div class="project-image">
        <img src={project.image.path} alt={project.image.alt} height={project.image.size} width={project.image.size}></img>
      </div>
      <div class="project-title">
        <p>{project.name}</p>
        <a href={project.deploy_link}>Deployed Site</a><br></br>
        <a href={project.readme_link}>Project Documentation</a>
        </div>
      <div class="project-description">
        <p>{project.description}</p>
      </div>
    </>
  );
};

export default Project;
