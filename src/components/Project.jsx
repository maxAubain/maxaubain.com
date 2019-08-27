import React from "react";

import "../css/tailwind.src.css";

// Tile receives the information of a single project as props from Projects, formats it, and returns.
const Project = props => {
  let project = props.project;
  return (
    <div key={project.id}>
      <div>{project.name}</div>
      <div>
        <p>{project.description}</p>
      </div>
      <div>
        <a href={project.deploy_link}>Deployed Site</a>
      </div>
      <div>
        <a href={project.readme_link}>Project Documentation</a>
      </div>
    </div>
  );
};

export default Project;
