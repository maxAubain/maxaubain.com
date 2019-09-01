import React, { Component } from "react";

// Tile receives the information of a single project as props from Projects, formats it, and returns.
class Project extends Component {
  constructor(props) {
    super(props);
    this.state = { projectFull: "project-details-container" };
  }

  render() {
    const description_full = this.props.project.description_full.map(p => {
      return <p>{p}</p>;
    });

    const menuActivate = () => {
      this.state.projectFull == "project-details-container"
        ? this.setState({ projectFull: "project-details-container activate" })
        : this.setState({ projectFull: "project-details-container" });
    };

    return (
      <>
        <div className="project-summary" onClick={menuActivate}>
          <img
            className="project-summary-icon"
            src={this.props.project.image.path}
            alt={this.props.project.image.alt}
            height="30"
            width="30"
          ></img>
          <div className="project-summary-title">{this.props.project.title}</div>
          <div className="project-summary-description">
            {this.props.project.description_short}
          </div>
        </div>

        <div className={this.state.projectFull}>
          <div className="project-details-padding">
            {description_full}
            <strong>Technlogies: </strong>
            {this.props.project.tech}
            <div className="project-details-link-container">
              <a href={this.props.project.link_1} className="project-details-link">
                website
              </a>
              <a href={this.props.project.link_2} className="project-details-link">
                github
              </a>
            </div>
          </div>
        </div>
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
