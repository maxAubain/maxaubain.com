import React, { Component } from "react";
import { NavLink } from "react-router-dom";

  /*  Option for later: implement for underline effect under navlinks
  let currentLocation = window.location.pathname;
  console.log("current location", currentLocation) */

// NavBar component contains navlinks to content components.
class NavBar extends Component {
  constructor() {
    super();
    this.handleScroll = this.handleScroll.bind(this);
    this.state = { navbarState: "navbar" };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  /* Checks vertical scroll location and adds/removes className 
  label to implement navbar shadow greater than 10 px scroll distance. */
  handleScroll(event) {
    let scrollLocation = document.documentElement.scrollTop;
    if (scrollLocation > 10) {
      this.setState({ navbarState: "navbar floating-navbar" });
    } else {
      this.setState({ navbarState: "navbar" });
    }
  }

  /* Sets view to top of page when navlink is clicked, otherwise
  navlink keeps same vertical scroll location from previous view location */
  resetView() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div id="navbar" className={this.state.navbarState}>
        <NavLink className="navlink" to="/" onClick={this.resetView}>
          Profile
        </NavLink>
        <NavLink className="navlink" to="WebDevelopment" onClick={this.resetView}>
          Web Development
        </NavLink>
        <NavLink className="navlink" to="CurriculumVitae" onClick={this.resetView}>
          Curriculum Vitae
        </NavLink>
        <NavLink className="navlink" to="TravelBlog" onClick={this.resetView}>
          Travel Blog
        </NavLink>
      </div>
    );
  }
}

export default NavBar;
