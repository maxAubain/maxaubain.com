import React, { Component } from "react"
import axios from "axios"
import Tile from "./Tile"
import { NavLink, Link } from 'react-router-dom';

class TileArray extends Component {
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
          <Tile project={project} />
        </div>
      )
    })

    return (
      <div>{projectsList} </div>
    )
  }
};

export default TileArray