import React from 'react';

function Buttons(props) {

    return (
        <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick = {props.homeTouchDown} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick = {props.homeFieldGoal} className="homeButtons__fieldGoal">Home Field Goal</button>
          <button onClick = {props.resetHomeScore} className="homeButtons__fieldGoal">Home Reset</button>
        </div>
        <div className="awayButtons">
          <button onClick = {props.awayTouchDown} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick = {props.awayFieldGoal} className="awayButtons__fieldGoal">Away Field Goal</button>
          <button onClick = {props.resetAwayScore} className="homeButtons__fieldGoal">Home Reset</button>
        </div>
        </section>
    )
}

export default Buttons;