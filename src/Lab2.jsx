import React, { Component } from "react"
import axios from "axios"


{/* const Lab2 = () => {
    return (
        <p>This is the const return.</p>
    )

} */}

class Lab2 extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        axios.get('./src/data/experience.json')
            .then(response => {
                this.setState({
                    experience: response.data  
                })
            })
            
        axios.get('./src/data/education.json')
        .then(response => {
            this.setState({
                education: response.data  
            })
        })
    }
    
    render() {
        return (
            <div>
                <p>This is the class return.</p>
            </div>
        )
    }
}; 

export default Lab2