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
    this.handleNavlinkProfileStyle = this.handleNavlinkProfileStyle.bind(this);
    this.resetView = this.resetView.bind(this);
    this.state = {
      navbarState: "navbar",
      navlinkCNprofile: "navlink"
    };
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
    if (document.documentElement.scrollTop > 10) {
      this.setState({ navbarState: "navbar floating-navbar" });
    } else {
      this.setState({ navbarState: "navbar" });
    }
  }

  /* Sets view to top of page when navlink is clicked */
  resetView() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto"
    });
  }

/* Formats current location navlink style */
  handleNavlinkProfileStyle() {
    console.log(this.state.navlinkCNprofile)
    if (this.state.navlinkCNprofile === "navlink") {
      this.setState({ navlinkCNprofile: "navlink_current" })
    } else {
      this.setState({ navlinkCNprofile: "navlink" })
    }
  }

  render() {
    return (
      <div id="navbar" className={this.state.navbarState}>
        <NavLink
          className={this.state.navlinkCNprofile}
          to="/"
          onClick={this.resetView, this.handleNavlinkProfileStyle}
        >
          Profile
        </NavLink>
        <NavLink
          className="navlink"
          to="WebDevelopment"
          onClick={this.resetView}
        >
          Web Development
        </NavLink>
        <NavLink
          className="navlink"
          to="CurriculumVitae"
          onClick={this.resetView}
        >
          Curriculum Vitae
        </NavLink>
        {/* <NavLink className="navlink" to="TravelBlog" onClick={this.resetView}>
          Travel Blog
        </NavLink> */}
      </div>
    );
  }
}

export default NavBar;
