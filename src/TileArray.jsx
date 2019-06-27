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
                    <div key={project.id} style={{ /*border: '2px solid red'*/ float: 'left', margin: '20px'}} className="min-h-900 my-1 px-1 w-64 shadow-2xl">
                        <Tile project={project} />
                    </div>
                )
            })
        }

        return (
            <>
                <div style={{border: '2px solid black', textAlign: 'center'}}>
                    <h1 className="content-text">Tile Array</h1>
                    <div style={{border: '2px solid green'}}>
                        {projectsList}
                    </div>
                </div>
            </>
            
        )
    }
};

export default TileArray