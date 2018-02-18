import React, { Component } from "react";

class Skills extends Component {
  render() {
    return (
      <div className="skills">
        <div className="skills-box">
          <p className="greet">Currently I spend my days...</p>
          <p className="body">
            <span className="mini-header">developing with:</span> Javascript,
            especially React, Redux, Flow.
          </p>
          <p className="body">
            <span className="mini-header">styling with:</span> SASS, CSS Grid
          </p>
          <p className="body">
            <span className="mini-header">testing with:</span> Mocha, Chai,
            Enzyme, Sinon
          </p>
          <p className="body">
            <span className="mini-header">playing with:</span> Webpack, Babel
          </p>
          <p className="body">
            <span className="mini-header">I've also worked with:</span> PHP,
            Java, Swift, Python
          </p>
        </div>
        <div className="work-box">
          <p className="greet">My timeline at a glance:</p>
          <p className="body">
            I am currently a{" "}
            <span className="mini-header">
              Front-end Develeoper (Working Student)
            </span>{" "}
            at{" "}
            <a className="company-link" href="">
              Riskmethods.
            </a>
          </p>
          <p className="body">
            Before that, I worked as a{" "}
            <span className="mini-header">Full Stack Developer</span> at{" "}
            <a className="company-link" href="">
              e-profound.
            </a>
          </p>
          <p className="body">
            Before that I worked as a{" "}
            <span className="mini-header">Freelance Developer</span> including{" "}
            Fit Art Pilates, Bims Tekstil, Cuse Hill Housing, AchievedIT.
          </p>
        </div>
      </div>
    );
  }
}

export default Skills;
