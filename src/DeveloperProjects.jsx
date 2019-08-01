import React, { Component } from "react"
import axios from "axios"
import Tile from "./Tile"

class DeveloperProjects extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    axios.get('./src/data/projects.json')
      .then(response => {
        this.setState({
          projects: response.data
        })
      })
  }

  render() {
    const projects = this.state.projects
    let projectsList

    if (projects.length > 0) {
      projectsList = projects.map(project => {
        return (
          <div key={project.id} className="float-left rounded-lg bg-white m-6 w-64">
            <Tile project={project} />
          </div>
        )
      })
    }

    return (
      <div>{projectsList} </div>
    )
  }
};

export default DeveloperProjects