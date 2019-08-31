import React, { Component } from "react";

// Tile receives the information of a single project as props from Projects, formats it, and returns.
class Project extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <button className="section-small feature">
          <div className="project-image">
            <img
              src={this.props.project.image.path}
              alt={this.props.project.image.alt}
              height="30"
              width="30"
            ></img>
            <div className="feature-title-outside">{this.props.project.name}</div>
          </div>
        </button>
      </>
    );
  }
}

export default Project;

{
  /* <>
  <div class="section-small feature">
    <div class="project-image">
      <img
        src={project.image.path}
        alt={project.image.alt}
        height={project.image.size}
        width={project.image.size}
      ></img>
      <div class="feature-title-outside">{project.name}</div>
    </div>
    <div class="project-title">
      <a href={project.deploy_link}>Deployed Application</a>
      <br></br>
      <a href={project.readme_link}>Repository & Documentation</a>
    </div>

    <div class="project-description">
      <p>{project.description}</p>
    </div>
  </div>
</>; */
}
