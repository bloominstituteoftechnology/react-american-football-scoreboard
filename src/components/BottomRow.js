import React, { Component } from "react";
import "../App.css";

export default class componentName extends Component {
  render() {
    return (
      <div className="bottomRow">
        <div className="foul">
          <h3 className="foul__title">Foul</h3>
          <div className="foul__value">{this.props.homeFoul}</div>
        </div>

        <div className="period">
          <h3 className="period__title">Period</h3>
          <div className="period__value">4</div>
        </div>

        <div className="foul">
          <h3 className="foul__title">Foul</h3>
          <div className="foul__value">{this.props.awayFoul}</div>
        </div>
      </div>
    );
  }
}
