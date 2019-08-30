import React from "react";

// Tile receives the information of a single project as props from Projects, formats it, and returns.
const Project = props => {
  let project = props.project;
  return (
    <>
      <div>
        <img src="./src/img/icon/portfolio.png"></img>
      </div>
      <div>
        <p>{project.name}</p>
        <a href={project.deploy_link}>Deployed Site</a><br></br>
        <a href={project.readme_link}>Project Documentation</a>
        </div>
      <div>
        <p>{project.description}</p>
      </div>
    </>
  );
};

export default Project;
