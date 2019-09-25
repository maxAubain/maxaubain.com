import React, { useState } from "react";

import { IconSmall } from "./imageComponents/IconSmall"

export const Project = props => {
  const [projectClass, setProjectClass] = useState(
    "project-details-container hidden"
  );
  const [project] = useState(props.project);

  const descriptionFull = project.descriptionFull.map(paragraph => {
    return <p key={paragraph}>{paragraph}</p>;
  });

  const handleProjectShow = () => {
    projectClass == "project-details-container hidden"
      ? setProjectClass("project-details-container")
      : setProjectClass("project-details-container hidden");
  };

  return (
    <>
      <div className="project-summary" onClick={handleProjectShow}>
        <IconSmall src={project.image.path} alt={project.image.alt} />
        <div className="project-summary-title">{project.title}</div>
        <div className="project-summary-description">
          {project.descriptionShort}
        </div>
      </div>

      <div className={projectClass}>
        <div className="project-details-padding">
          {descriptionFull}
          <strong>Technology Stack: {project.tech}</strong>
          <div className="project-details-link-container">
            <a href={project.link1} className="project-details-link">
              {project.linkLabel1}
            </a>
            <a href={project.link2} className="project-details-link">
              {project.linkLabel2}
            </a>
            <a href={project.link3} className="project-details-link">
              {project.linkLabel3}
            </a>
            <a href={project.link4} className="project-details-link">
              {project.linkLabel4}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
