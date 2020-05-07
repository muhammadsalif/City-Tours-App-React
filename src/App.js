import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Tour from "./components/Tour/Tour";
import TourList from "./components/TourList/TourList";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <TourList></TourList>
        {/* <Tour></Tour> */}
      </React.Fragment>
    );
  }
}

export default App;
