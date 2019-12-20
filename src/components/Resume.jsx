import React from "react";

import { WebLink } from "./common/WebLink";

export const Resume = () => {
  return (
    <div className="resume-wrapper">
      <h4><WebLink
        url="https://drive.google.com/open?id=1W1EpFB8h9eK1vvrDvxYVNgQ6tspLwpA1"
        linkText="Download Link"
        className="weblink resume-link"
      /></h4>
      <object
        className="pdf"
        data="./src/pdf/Resume_Developer.pdf"
        type="application/pdf"
      />
    </div>
  );
};
