import React, { Component } from "react"
import axios from "axios"
import Tile from "./Tile"
import { NavLink, Link } from 'react-router-dom';

class TileArray extends Component {
    constructor() {
        super();
        this.state = {
            projects: []
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('Click happened');
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
            <NavLink to='/about'><div style={{ textAlign: 'center'}}>
                <h1 onClick={this.handleClick} className="content-text"></h1>
                <div>
                    {projectsList}
                </div>
            </div></NavLink>
            
        )
    }
};

export default TileArray