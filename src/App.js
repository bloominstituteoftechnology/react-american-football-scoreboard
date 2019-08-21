//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, updateHomeScore] = useState(0);
  const [awayScore, updateAwayScore] = useState(0);
  const [timer, updateTimer] = useState(15.00);
  setTimeout(() => {
    updateTimer(timer  )
  }, 1000);
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="away">
            <h2 className="away__name">Packers</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="away__score">{awayScore}</div>
          </div>
          <div className="timer">{timer}</div>f
          <div className="home">
            <h2 className="home__name">Vikings</h2>
            <div className="home__score">{homeScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="awayButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button
            className="awayButtons__touchdown"
            onClick={() => updateAwayScore(awayScore + 7)}
          >
            Away Touchdown
          </button>
          <button
            className="awayButtons__fieldGoal"
            onClick={() => updateAwayScore(awayScore + 3)}
          >
            Away Field Goal
          </button>
        </div>
        <div className="homeButtons">
          <button
            className="homeButtons__touchdown"
            onClick={() => updateHomeScore(homeScore + 7)}
          >
            Home Touchdown
          </button>
          <button
            className="homeButtons__fieldGoal"
            onClick={() => updateHomeScore(homeScore + 3)}
          >
            Home Field Goal
          </button>
        </div>
      </section>
    </div>
  );
}

// export default App;
export default App;
