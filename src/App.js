//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import BottomRow from "./BottomRow";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
    const homeScore = 0;
    const awayScore = 0;
    const [lionScore, lionAddedPoints] = useState(homeScore);
    const [tigerScore, tigerAddedPoints] = useState(awayScore);
    // function TouchDown(){
        // return
    // };
    // function FieldGoal(){
        // return
    // };

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{lionScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
              <div className="away__score">{tigerScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={() => lionAddedPoints(lionScore + 7)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={() => lionAddedPoints(lionScore + 3)} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={() => tigerAddedPoints(tigerScore + 7)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={() => tigerAddedPoints(lionScore + 3)} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
