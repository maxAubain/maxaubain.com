import React, { Component } from "react"
import axios from "axios"
import EducationTile from "./EducationTile"


{/* const Lab2 = () => {
    return (
        <p>This is the const return.</p>
    )

} */}

class Lab2 extends Component {
    constructor() {
        super();
        this.state = {
            experience: [],
            education: []
        };
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
        const experience = this.state.experience
        let experienceList

        const education = this.state.education
        let educationList

        if (education.length > 0) {
            educationList = education.map(educationItem => {
                return (
                    <div key={educationItem.id} style={{ width: '100vw' }} className="rounded-lg bg-white m-6">
                        <EducationTile educationItem={educationItem} />
                    </div>
                )
            })
        }


        return (
            
            <div className="xs:text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl">
                <div className="px-6 py-4 w-screen border-blue-darker" style={{borderBottom: "1px solid"}}>
                    <p>Page theme: Curriculum Vitae (CV).</p>
                    <p>Features: Axios data retrieval; scalable text size based on screen width.</p>
                </div>
                
                <div className="xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                    Education
                </div>
                <div className="px-1/4">
                    {educationList}
                </div>
            </div>
        )
    }
}; 

export default Lab2