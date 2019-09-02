import React, { Component } from "react";

/* The Project component receives the information of a single project as
props from Projects, formats it, and returns. */
class Project extends Component {
  constructor(props) {
    super(props);
    this.state = { projectFull: "project-details-container activate" };
  }

  render() {
    const description_full = this.props.project.description_full.map(p => {
      return <p>{p}</p>;
    });

    /* menuActivate() enables the showing/hiding of the 'project-details' 
    div to keep the page tidy and easy to read. */
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
            <strong>Technologies: {this.props.project.tech}</strong>
            <div className="project-details-link-container">
              <a href={this.props.project.link_1} className="project-details-link">
                {this.props.project.link_1_button}
              </a>
              <a href={this.props.project.link_2} className="project-details-link">
                {this.props.project.link_2_button}
              </a>
              <a href={this.props.project.link_3} className="project-details-link">
                {this.props.project.link_3_button}
              </a>
              <a href={this.props.project.link_4} className="project-details-link">
                {this.props.project.link_4_button}
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Project;
