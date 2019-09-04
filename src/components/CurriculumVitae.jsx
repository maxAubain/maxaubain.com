import React, { Component } from "react";
/* import axios from "axios";
import EducationTile from "./EducationTile";
import ExperienceTile from "./ExperienceTile"; */

/* This component needs a new plan.  Keeping old layout for
now for inspiration later. */
class CurriculumVitae extends Component {
  /* constructor() {
    super();
    this.state = {
      experience: [],
      education: []
    };
  }

  componentDidMount() {
    axios.get("./src/data/experience.json").then(response => {
      this.setState({
        experience: response.data
      });
    });

    axios.get("./src/data/education.json").then(response => {
      this.setState({
        education: response.data
      });
    });
  } */

  render() {
/*     const education = this.state.education;
    let educationList;

    if (education.length > 0) {
      educationList = education.map(educationItem => {
        return (
          <div
            key={educationItem.id}
            style={{ width: "50vw" }}
            className="m-16"
          >
            <EducationTile educationItem={educationItem} />
          </div>
        );
      });
    }

    const experience = this.state.experience;
    let experienceList;

    if (experience.length > 0) {
      experienceList = experience.map(experienceItem => {
        return (
          <div
            key={experienceItem.id}
            style={{ width: "50vw" }}
            className="m-16"
          >
            <ExperienceTile experienceItem={experienceItem} />
          </div>
        );
      });
    } */

    return (
 /*      <div className="xs:text-sm sm:text-sm md:text-sm lg:text-base xl:text-base">
        <div
          className="xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl pt-4"
          style={{ textAlign: "center" }}
        >
          Education
        </div>
        <div className="px-1/5">{educationList}</div>

        <div
          className="xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl pt-4"
          style={{ textAlign: "center" }}
        >
          Experience
        </div>
        <div className="px-1/5">{experienceList}</div>
      </div> */
      <div className="component">
        <p>Coming soon.  For more information about education, work experience, and publications, please visit my <a href="https://www.linkedin.com/in/maxaubain/">Linkedin profile</a>.</p>
      </div>
    );
  }
}

export default CurriculumVitae;
