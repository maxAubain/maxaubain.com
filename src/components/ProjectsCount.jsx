import React, { useState, useEffect } from "react";
import axios from "axios";

export const ProjectsCount = ({ path }) => {
  const [projects, setProjects] = useState([]);
  let projectsCount = projects.length;

  useEffect(() => {
    if (projectsCount === 0) {
      axios.get(path).then(response => {
        setProjects(response.data);
      });
    }
  });

  if (projectsCount > 0) {
    return <>&nbsp;({projectsCount})</>;
  } else {
    return <></>;
  }
};
