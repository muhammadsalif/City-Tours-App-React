import React, { Component } from "react";
import Tour from "./../Tour/Tour";
import { tourData } from "../../tourData";
import "./tourlist.scss";

class TourList extends Component {
  state = {
    tours: tourData,
  };

  removeTour = (id) => {
    console.log(id);
  };

  render() {
    // console.log(this.state.tours);
    const { tours } = this.state;

    return (
      <section className="tourlist">
        {tours.map((tour) => (
          <Tour key={tour.id} tour={tour} removeTour={this.removeTour}></Tour>
        ))}
      </section>
    );
  }
}

export default TourList;
