import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <div>
          <h1>Hello World.</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
