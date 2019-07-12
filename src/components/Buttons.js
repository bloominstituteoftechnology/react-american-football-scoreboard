import React, { Component } from "react";
import "../App.css";

export default class componentName extends Component {
  render() {
    return (
      <section className="buttons">
        <div className="homeButtons">
          <button
            className="homeButtons__touchdown"
            onClick={() => this.props.updateHomeScore(this.props.homeScore + 7)}
          >
            Home Touchdown
          </button>
          <button
            className="homeButtons__fieldGoal"
            onClick={() => this.props.updateHomeScore(this.props.homeScore + 3)}
          >
            Home Field Goal
          </button>
        </div>
        <div className="awayButtons">
          <button
            className="awayButtons__touchdown"
            onClick={() => this.props.updateAwayScore(this.props.awayScore + 7)}
          >
            Away Touchdown
          </button>
          <button
            className="awayButtons__fieldGoal"
            onClick={() => this.props.updateAwayScore(this.props.awayScore + 3)}
          >
            Away Field Goal
          </button>
        </div>
      </section>
    );
  }
}
