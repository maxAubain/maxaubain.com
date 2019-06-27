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
                    <div key={project.id} className="float-left rounded-lg bg-white m-6 w-64 shadow-2xl">
                        <Tile project={project} />
                    </div>
                )
            })
        }

        return (
            <>
                <div style={{ /* border: '2px solid black', */ textAlign: 'center'}}>
                    <h1 className="content-text">Experiments</h1>
                    <div style={{ /* border: '2px solid green' */}}>
                        {projectsList}
                    </div>
                </div>
            </>
            
        )
    }
};

export default TileArray