//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import BottomRow from "./BottomRow";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [lScore, setHomeScore] = useState(0)
  const [tScore, setAwayScore] = useState(0)

  const lTD = e => {
    setHomeScore( lScore + 7 )
  }
  const lFG = e => {
    setHomeScore( lScore + 3 )
  }
  const tTD = e => {
    setAwayScore( tScore + 7 )
  }
  const tFG = e => {
    setAwayScore( tScore + 3 )
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{lScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={lTD} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={lFG} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={tTD} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={tFG} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
