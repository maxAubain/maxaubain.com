import React, { useState } from "react";

import { IconSmall } from "./imageComponents/IconSmall"

export const Project = props => {
  const [projectContainerClassName, setProjectContainerClassName] = useState(
    "project-details-container hidden"
  );
  const [projectSummaryTitleClassName, setProjectSummaryTitleClassName] = useState(
    "project-summary-title"
  )
  const [project] = useState(props.project);

  const descriptionFull = project.descriptionFull.map(paragraph => {
    return <p key={paragraph}>{paragraph}</p>;
  });

  const handleProjectShow = () => {
    if (projectContainerClassName == "project-details-container hidden") {
      setProjectContainerClassName("project-details-container")
      setProjectSummaryTitleClassName("project-summary-title current")
    } else {
      setProjectContainerClassName("project-details-container hidden");
      setProjectSummaryTitleClassName("project-summary-title")
    }
  };

  return (
    <>
      <div className="project-summary" onClick={handleProjectShow}>
        <IconSmall src={project.image.path} alt={project.image.alt} />
        <div className={projectSummaryTitleClassName}>{project.title}</div>
        <div className="project-summary-description">
          {project.descriptionShort}
        </div>
      </div>

      <div className={projectContainerClassName}>
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
