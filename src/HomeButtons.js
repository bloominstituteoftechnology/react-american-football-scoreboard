import React from "react";
import "./App.css";


function HomeButtons(props) {
console.log(props.setHome)

  return (
    <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick= { () => props.setHome(props.home + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick= { () => props.setHome(props.home + 3)}>Home Field Goal</button>
        </div>
          )
}

export default HomeButtons;