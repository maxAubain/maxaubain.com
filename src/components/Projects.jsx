import React, { Component } from "react"
import axios from "axios"

import Project from "./Project"

// Projects uses a GET request to receive projects file infromation and
// renders an array of Project components for each project in the file.
// It receives the path of the projects file as props from DeveloperProjects.
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    axios.get(this.props.path)
      .then(response => {
        this.setState({
          projects: response.data
        })
      })
  }

  render() {
    let projectsList = this.state.projects.map(project => {
      return (
        <div key={project.id} className="float-left rounded-lg bg-white m-6 w-64">
          <Project project={project} />
        </div>
      )
    })

    return (
      <div>{projectsList} </div>
    )
  }
};

export default Projects