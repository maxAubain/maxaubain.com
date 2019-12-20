import React from "react";

export const IconSmall = props => {
  return (
    <img
      className="project-summary-icon"
      src={props.src}
      alt={props.alt}
      height="30"
      width="30"
    ></img>
  );
};
