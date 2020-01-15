import React, { useState, useEffect } from "react";
import axios from "axios";

import { Projects } from "./Projects";
import { ProjectsCount } from "./ProjectsCount";

export const DeveloperProjects = () => {
  // Define project categories attributes
  const projectCategories = {
    Featured: ".src/data/projectsFeatured.json",
    "Full Stack": "./src/data/projectsFullStack.json",
    "Front End": "./src/data/projectsFrontEnd.json",
    "Coding Exercises": "./src/data/projectsExercises.json"
  };

  // Get externalLinks as hash of tech keywords and tech description weblinks
  const [externalLinks, setExternalLinks] = useState({});
  useEffect(() => {
    if (Object.keys(externalLinks).length === 0) {
      axios.get("./src/data/externalLinks.json").then(response => {
        setExternalLinks(response.data);
      });
    }
  });

  // Set current project category state
  const [currentProjectCategory, setCurrentProjectCategory] = useState(
    "Featured"
  );

  // Project Categories navlinks
  let navlinkSectionClassName;
  const ProjectCategoriesNavlinks = Object.keys(projectCategories).map(key => {
    key === currentProjectCategory
      ? (navlinkSectionClassName = "navlink-section-current")
      : (navlinkSectionClassName = "navlink-section");

    return (
      <div
        key={key}
        className={navlinkSectionClassName}
        onClick={() => {
          setCurrentProjectCategory(key);
        }}
      >
        {key}
        <ProjectsCount path={projectCategories[key]} />
      </div>
    );
  });

  // Projects object when category is selected
  const projects = Object.keys(projectCategories).map(key => {
    if (key === currentProjectCategory) {
      return (
        <Projects
          key={key}
          path={projectCategories[currentProjectCategory]}
          externalLinks={externalLinks}
        />
      );
    }
  });

  if (Object.keys(externalLinks).length > 0) {
    return (
      <>
        <div className="navlink-section-container">
          {ProjectCategoriesNavlinks}
        </div>
        <div className="project-categories-wrapper">{projects}</div>
      </>
    );
  } else {
    return <></>;
  }
};
