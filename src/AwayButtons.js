import React from "react";
import "./App.css";


function AwayButtons(props) {


  return (
    <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="awayButtons__touchdown" onClick= { () => props.setAway(props.away + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick= { () => props.setAway(props.away + 3)}>Away Field Goal</button>
        </div>
          )
}

export default AwayButtons;