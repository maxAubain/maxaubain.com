import React, { useState } from "react";

import { IconSmall } from "./imageComponents/IconSmall";

export const Project = ({ project }) => {
  const [projectAttributes, setProjectAttributes] = useState({
    hidden: true
  });

  let projectContainerClassName, projectSummaryTitleClassName;
  if (projectAttributes.hidden) {
    projectContainerClassName = "project-details-container hidden";
    projectSummaryTitleClassName = "project-summary-title";
  } else {
    projectContainerClassName = "project-details-container";
    projectSummaryTitleClassName = "project-summary-title navlink-current";
  }

  const descriptionFull = project.descriptionFull.map(paragraph => {
    return <p key={paragraph}>{paragraph}</p>;
  });

  return (
    <>
      <div
        className="project-summary"
        onClick={() => {setProjectAttributes({ hidden: !projectAttributes.hidden })}}
      >
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
