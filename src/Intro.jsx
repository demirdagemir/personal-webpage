import React, { Component } from "react";
import "./intro.css";

class Intro extends Component {
  render() {
    return (
      <div className="intro">
        <p className="intro-box">
          <span className="greet">Hi,</span>
          <span className="body">
            I’m Emir. I’m a Sofware Engineer based in Munich, Germany. I
            currently work at{" "}
            <a
              target="_blank"
              href="http://www.riskmethods.net"
              className="company-link"
            >
              riskmethods
            </a>{" "}
            where I work part-time as a Front-end Developer, while doing my
            Master’s Degree at the{" "}
            <a className="edu-link" target="_blank" href="http://www.tum.de">
              Technical University of Munich.
            </a>
          </span>
        </p>
      </div>
    );
  }
}

export default Intro;
