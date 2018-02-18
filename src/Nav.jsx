import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="selected">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" activeClassName="selected">
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="selected">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
