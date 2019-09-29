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
    projectSummaryTitleClassName = "project-summary-title-current";
  }

  const descriptionFull = project.descriptionFull.map(paragraph => {
    return <p key={paragraph}>{paragraph}</p>;
  });

  return (
    <>
      <div
        className="project-summary"
        onClick={() => {
          setProjectAttributes({ hidden: !projectAttributes.hidden });
        }}
      >
        <IconSmall src={project.image.path} alt={project.image.alt} />
        <div className={projectSummaryTitleClassName}>{project.title}</div>
        <div className="project-summary-description">
          {project.descriptionShort}
        </div>
      </div>

      <div className={projectContainerClassName}>
        <div className="project-details-padding">
          <div className="project-details-link-container">
            Links:
            <NewTabLink
              url={project.link1}
              linkText={project.linkLabel1}
              className="project-details-link weblink"
            />
            <NewTabLink
              url={project.link2}
              linkText={project.linkLabel2}
              className="project-details-link weblink"
            />
            <NewTabLink
              url={project.link3}
              linkText={project.linkLabel3}
              className="project-details-link weblink"
            />
            <NewTabLink
              url={project.link4}
              linkText={project.linkLabel4}
              className="project-details-link weblink"
            />
          </div>
          <div className="project-description-full-container">
            <div className="project-description-full">
              <strong>Description</strong>
              {descriptionFull}
            </div>
            <div className="project-stack">
              <strong>Technology Stack</strong>
              <p>{project.tech}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
