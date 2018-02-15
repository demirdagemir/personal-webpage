import React, { Component } from "react";
import "./nav.css";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <ul>
          <li>About</li>
          <li>Focus</li>
          <li>Resume</li>
          <li>Contact</li>
        </ul>
        <div className="navbar-bottom" />
      </div>
    );
  }
}

export default Navbar;
