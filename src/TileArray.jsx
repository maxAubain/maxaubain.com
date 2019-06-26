import React, { Component } from "react"
import axios from "axios"
import Tile from "./Tile"

class TileArray extends Component {
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
                    <div key={project.id} className="min-h-900 my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <Tile project={project} />
                    </div>
                )
            })
        }

        return (
            <div>
                <h1 className="content-text">Tile Array</h1>
                {projectsList}
            </div>
        )
    }
};

export default TileArray