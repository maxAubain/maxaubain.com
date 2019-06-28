import React, { Component } from "react"
import posed from 'react-pose'

const Box = posed.div({
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
})

class Lab1 extends Component {
    state = { isVisible: true };
    
    componentDidMount() {
        setInterval(() => {
          this.setState({ isVisible: !this.state.isVisible });
        }, 1000);
      }
    
      render() {
        const { isVisible } = this.state;
        return <Box className="box" pose={isVisible ? 'visible' : 'hidden'} />;
      }
};

export default Lab1