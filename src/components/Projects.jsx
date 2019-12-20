import React, { useState, useEffect } from "react";
import axios from "axios";

import { Project } from "./Project";

export const Projects = ({ path, externalLinks }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (projects.length === 0) {
      axios.get(path).then(response => {
        setProjects(response.data);
      });
    }
  });

  const projectsList = projects.map(project => {
    return (
      <div key={project.id}>
        <Project project={project} externalLinks={externalLinks} />
      </div>
    );
  });

  if (projects.length > 0) {
    return <>{projectsList}</>;
  } else {
    return <></>;
  }
};
