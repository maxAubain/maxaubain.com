import React from "react";

export const WebLink = ({ url, linkText, className }) => {
  return (
    <a
      onClick={() => {
        window.open(url, "_blank");
      }}
      className={className}
    >
      {linkText}
    </a>
  );
};
