import React, { useState, useEffect } from "react";
import axios from "axios";

import Project from "./Project";

export const Projects = projectsCategory => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (projects.length === 0) {
      axios.get(projectsCategory.path).then(response => {
        setProjects(response.data);
      });
    }
  });

  let projectsRender = projects.map(project => {
    return (
      <div key={project.id}>
        <Project project={project} />
      </div>
    );
  });

  return <div className="feature-container">{projectsRender}</div>;
};
