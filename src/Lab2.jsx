import React, { Component } from "react"
import axios from "axios"
import EducationTile from "./EducationTile"
import ExperienceTile from "./ExperienceTile"


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
        const education = this.state.education
        let educationList

        if (education.length > 0) {
            educationList = education.map(educationItem => {
                return (
                    <div key={educationItem.id} style={{ width: '50vw'}} className="m-16">
                        <EducationTile educationItem={educationItem} />
                    </div>
                )
            })
        }

        const experience = this.state.experience
        let experienceList

        if (experience.length > 0) {
            experienceList = experience.map(experienceItem => {
                return (
                    <div key={experienceItem.id} style={{ width: '50vw'}} className="m-16">
                        <ExperienceTile experienceItem={experienceItem} />
                    </div>
                )
            })
        }


        return (
            
            <div className="xs:text-sm sm:text-sm md:text-sm lg:text-base xl:text-base">
                <div className="px-6 py-4 w-screen bg-blue-light">
                    <ol>
                        <li><b>Page theme</b> - Curriculum Vitae (CV).</li>
                        <li><b>Features</b> - Axios data retrieval; scalable text size based on screen width.</li>
                        <li><b>Development plan</b> - Content; Tabbed sections; linked publications.</li>
                    </ol>
                </div>
                
                <div className="xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl pt-4" style={{textAlign: 'center'}}>
                    Education
                </div>
                <div className="px-1/5">
                    {educationList}
                </div>

                <div className="xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl pt-4" style={{textAlign: 'center'}}>
                    Experience
                </div>
                <div className="px-1/5">
                    {experienceList}
                </div>
            </div>
        )
    }
}; 

export default Lab2