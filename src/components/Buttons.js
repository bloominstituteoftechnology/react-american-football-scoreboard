import React, { Component } from "react";
import "../App.css";

export default class componentName extends Component {
  render() {
    return (
      <section className="buttons">
        <div className="homeButtons">
          <button
            className="homeButtons__shot"
            onClick={() => this.props.updateHomeScore(this.props.homeScore + 2)}
          >
            Home +2
          </button>
          <button
            className="homeButtons__freeThrow"
            onClick={() => this.props.updateHomeScore(this.props.homeScore + 1)}
          >
            Home +1
          </button>
          <button
            className="homeFouls"
            onClick={() => this.props.updateHomeFoul(this.props.homeFoul + 1)}
          >
            Home Foul +1
          </button>
        </div>
        <div className="awayButtons">
          <button
            className="awayButtons__shot"
            onClick={() => this.props.updateAwayScore(this.props.awayScore + 2)}
          >
            Away +2
          </button>
          <button
            className="awayButtons__freeThrow"
            onClick={() => this.props.updateAwayScore(this.props.awayScore + 1)}
          >
            Away +1
          </button>
          <button
            className="awayFouls"
            onClick={() => this.props.updateAwayFoul(this.props.awayFoul + 1)}
          >
            Away Foul +1
          </button>
        </div>
      </section>
    );
  }
}
