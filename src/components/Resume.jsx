import React from "react";

import { WebLink } from "./common/WebLink";

export const Resume = () => {
  return (
    <div className="resume-wrapper">
      <h4><WebLink
        url="https://drive.google.com/open?id=1r9NKpSXyXky87jLEICQ_j8X_-7efsXsw"
        linkText="Download Resume"
        className="weblink resume-link"
      /></h4>
      <object
        className="pdf"
        data="./src/pdf/Max Aubain - R - FSD.pdf"
        type="application/pdf"
      />
    </div>
  );
};
