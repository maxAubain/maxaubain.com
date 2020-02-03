import React, { useState } from "react";

import { IconSmall } from "../common/IconSmall";
import { WebLink } from "../common/WebLink";
import { TechWebLinks } from "../../modules/TechWebLinks";

export const Project = ({ project, externalLinks }) => {
  // Show/hide Project object details functionality
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

  // Project Links object
  const projectLinks = Object.keys(project.links).map(key => {
    return (
      <div key={key}>
        <WebLink
          url={project.links[key]}
          linkObj={key}
          className="project-details-link weblink"
        />
      </div>
    );
  });

  // Description object
  const projectDescription = project.descriptionFull.map(paragraph => {
    return <p key={paragraph}>{paragraph}</p>;
  });

  // Technology Stack object
  let valueArray, valueArraylength, i;
  const technologyStack = Object.keys(project.tech).map(key => {
    valueArray = project.tech[key].split(", "); // e.g. valueArray = ["Netlify", "Heroku"]
    valueArraylength = valueArray.length;

    // Replace each string value with weblink object in array
    for (i = 0; i < valueArraylength; i++) {
      valueArray.splice(
        i,
        1,
        <TechWebLinks
          key={valueArray[i]}
          keyword={valueArray[i]}
          externalLinks={externalLinks}
        />
      );
    }

    // Insert ", " value between adjacent weblink objects in array
    if (valueArraylength > 1) {
      for (i = 1; i < 2 * valueArraylength - 2; i = i + 2) {
        valueArray.splice(i, 0, ", ");
      }
    }

    return (
      <p key={key}>
        <strong>{key}</strong>: {valueArray}.
      </p>
    );
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
          <div className="project-description-full-container">
            <div className="project-details-link-container">
              <strong>
                <u>Links</u>
              </strong>
              {projectLinks}
              <br></br>
              {/* <div className="project-description-full"> */}
              <strong>
                <u>Description</u>
              </strong>
              {projectDescription}
              {/* </div> */}
            </div>
            <div className="project-tech">
              <strong>
                <u>Technology</u>
              </strong>
              {technologyStack}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
