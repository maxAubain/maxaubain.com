import React, { useState } from "react";

import { Projects } from "./Projects";
import { IconSmall } from "./imageComponents/IconSmall";

export const DeveloperProjects = () => {
  const [projectsCategories, setProjectsCategories] = useState({
    0: {
      title: "Full Stack Applications",
      path: "./src/data/projectsFullStack.json",
      hidden: true
    },
    1: {
      title: "Front End Applications",
      path: "./src/data/projectsFrontEnd.json",
      hidden: true
    },
    2: {
      title: "Mobile Applications",
      path: "./src/data/projectsMobile.json",
      hidden: true
    },
    3: {
      title: "Coding Exercises",
      path: "./src/data/projectsExercises.json",
      hidden: true
    }
  });

  let src, alt, projectsContainerClassName, icon;

  const projsCats = Object.keys(projectsCategories).map(key => {
    if (projectsCategories[key].hidden) {
      src = "./src/img/icon/plus.png";
      alt = "plus-icon";
      projectsContainerClassName = "hidden";
    } else {
      src = "./src/img/icon/minus.png";
      alt = "minus-icon";
      projectsContainerClassName = "";
    }

    icon = <IconSmall src={src} alt={alt} />;

    return (
      <div key={projectsCategories[key].title}>
        <div
          className="section"
          onClick={() => {
            setProjectsCategories({
              ...projectsCategories,
              [key]: {
                id: projectsCategories[key].id,
                title: projectsCategories[key].title,
                path: projectsCategories[key].path,
                hidden: !projectsCategories[key].hidden
              }
            });
          }}
        >
          {icon}
          <div className="section-title">{projectsCategories[key].title}</div>
        </div>
        <div className={projectsContainerClassName}>
          <Projects path={projectsCategories[key].path} />
        </div>
      </div>
    );
  });

  return <>{projsCats}</>;
};
