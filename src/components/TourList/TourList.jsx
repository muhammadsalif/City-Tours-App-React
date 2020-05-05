import React, { Component } from "react";
import "./tourlist.scss";
import { tourData } from "../../tourData";

class TourList extends Component {
  state = {
    tours: tourData,
  };
  render() {
    console.log(this.state.tours);

    return (
      <div>
        <h1>Hello from tourlist</h1>
      </div>
    );
  }
}

export default TourList;
