import React, { Component } from "react"
import posed from 'react-pose'

const Box = posed.div({
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
})

class Lab1 extends Component {
    constructor(){
        super()
        this.state = { isVisible: null };
    }

    componentDidMount() {
        setInterval(() => {
          this.setState({ isVisible: !this.state.isVisible });
        }, 1000);
    }

    render() {
        
        let { isVisible } = this.state;

        return(
            <div>
                <div className="px-6 py-4 w-screen bg-blue-light">
                    <ol>
                        <li><b>Page theme</b> - Find home button, features with timed visibility.</li>
                        <li><b>Features</b> - Popmotion Pose component for animation.</li>
                        <li><b>Development plan</b> - Page layout; Have hint button show after 5 seconds; Have arrow show after hint button is pressed.</li>
                    </ol>
                </div>
                <div>
                    <Box className="up-triangle" pose={isVisible ? 'visible' : 'hidden'} />
                </div>
                <div className="text-2xl">
                    <p style={{maxWidth: '40vw', verticalAlign: 'center' }}>Find your way back to Home without using the browser navigation buttons.</p> 
                    <button onClick={this.changeState} className="text-white bg-black rounded">Hint?</button>
                </div>
            </div>
        )
    }
};

export default Lab1