import React, { Component } from "react";
import "./intro.css";

class Contact extends Component {
  render() {
    return (
      <div className="intro">
        <p className="intro-box">
          <span className="greet">Simply:</span>
          <span className="body links">
            <a href="mailto:emirdemirdag@gmail.com" className="company-link">
              emirdemirdag@gmail.com
            </a>{" "}
            <br />
            <span className="also">Also:</span>
            <a
              className="edu-link"
              target="_blank"
              href="http://www.github.com/demirdagemir"
            >
              Github
            </a>
            <a
              className="edu-link"
              target="_blank"
              href="https://www.linkedin.com/in/emir-demirdag-13a19664/"
            >
              LinkedIn
            </a>
            <a
              className="edu-link"
              target="_blank"
              href="https://www.xing.com/profile/Emir_Demirdag"
            >
              Xing
            </a>
          </span>
        </p>
      </div>
    );
  }
}

export default Contact;
