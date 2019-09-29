import React, { useState } from "react";

import { IconSmall } from "./common/IconSmall";
import { NewTabLink } from "./common/NewTabLink";

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
            <NewTabLink url={project.link1} linkText={project.linkLabel1} className="project-details-link" />
            <NewTabLink url={project.link2} linkText={project.linkLabel2} className="project-details-link" />
            <NewTabLink url={project.link3} linkText={project.linkLabel3} className="project-details-link" />
            <NewTabLink url={project.link4} linkText={project.linkLabel4} className="project-details-link" />
          </div>
        </div>
      </div>
    </>
  );
};
