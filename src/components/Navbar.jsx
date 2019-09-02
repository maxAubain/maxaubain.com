import React, { Component } from "react";
import { NavLink } from "react-router-dom";

// NavBar component contains navlinks to content components.
class NavBar extends Component {
  /*  Option for later: implement for underline effect under navlinks
  let currentLocation = window.location.pathname;
  console.log("current location", currentLocation) */

  constructor() {
    super();
    this.handleScroll = this.handleScroll.bind(this);
    this.state = { navbarState: "navbar" };
  }

  /*  Adds/removes event listener that triggers on vertical
  scroll anywhere on the page */
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  /* Checks absolute vertical scroll location and adds/removes className 
  label to implement navbar shadow greater than 10 px scroll distance. */
  handleScroll(event) {
    let scrollLocation = document.documentElement.scrollTop;
    if (scrollLocation > 10) {
      this.setState({ navbarState: "navbar floating-navbar" });
    } else {
      this.setState({ navbarState: "navbar" });
    }
  }

  render() {
    return (
      <div id="navbar" className={this.state.navbarState}>
        <NavLink className="navlink" to="/">
          Profile
        </NavLink>
        <NavLink className="navlink" to="WebDevelopment">
          Web Development
        </NavLink>
        <NavLink className="navlink" to="CurriculumVitae">
          Curriculum Vitae
        </NavLink>
        <NavLink className="navlink" to="TravelBlog">
          Travel Blog
        </NavLink>
      </div>
    );
  }
}

export default NavBar;
