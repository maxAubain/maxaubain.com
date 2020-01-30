import React from "react";

import { WebLink } from "./common/WebLink";

export const Resume = () => {
  return (
    <div className="resume-wrapper">
      <h4>
        <WebLink
          url="https://drive.google.com/file/d/1hrZhhpOOXbsASexTFAvGGbN2Qs73Jaue/view?usp=sharing"
          linkObj="Download"
          className="weblink resume-link"
        />{" "}
        resume with Google Drive.
      </h4>
      <object
        className="pdf"
        data="./src/pdf/Max Aubain - Resume - 2020.pdf"
        type="application/pdf"
      />
    </div>
  );
};
