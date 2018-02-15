import React, { Component } from "react";
import Navbar from "./Nav";
import Intro from "./Intro";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Intro />
      </div>
    );
  }
}

export default App;
