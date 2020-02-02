//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  var [ homeTeamOn, setHomeTeamOn ] = useState(0);
  var [ awayTeamOn, setAwayTeamOn ] = useState(0);
  // const onClickHandlerTouchdown = () => setTouchdown({homeTeamOn} || {awayTeamOn} + 7);
  // const onClickHandlerFieldGoal = () => setFieldGoal({homeTeamOn} || {awayTeamOn} + 3);
  // const OnClickAway = () => setAwayTeamOn(awayTeamOn + 7);
  // const OnClickAway1 = () => setAwayTeamOn(awayTeamOn + 3);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

  <div className="home__score" >{homeTeamOn}</div>
          </div>
          <div className="timer">15:00</div>
          <div className="away">
  <h2 className="away__name">Browns</h2>
            <div className="away__score">{awayTeamOn}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={() => setHomeTeamOn(homeTeamOn += 7)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={() => setHomeTeamOn(homeTeamOn += 3)} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={() => setAwayTeamOn(awayTeamOn += 7)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={() => setAwayTeamOn(awayTeamOn += 3)} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div> 
      </section>
    </div>
  );
}

export default App;
