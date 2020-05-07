import "./tour.scss";
import React, { Component } from "react";
class Tour extends Component {
  state = {
    tourInfo: false,
  };

  handleInfo = () => {
    this.setState({ tourInfo: !this.state.tourInfo });
  };

  render() {
    const { id, name, city, img, info } = this.props.tour;
    const { removeTour } = this.props;

    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt="Tour Image." />
          <span className="close-btn">
            <i className="fas fa-window-close"></i>
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info{" "}
            <span onClick={this.handleInfo}>
              <i className="fas fa-caret-square-down"></i>
            </span>
          </h5>
          {this.state.tourInfo && <p>{info}</p>}
        </div>
      </article>
    );
  }
}

export default Tour;
