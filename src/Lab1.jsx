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