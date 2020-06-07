//STEP 1 - Import the useState hook.
import React, { useState } from "react";
import BottomRow from "./BottomRow";
import "./App.css";

function App() {
  //STEP 2 - Establish your application's state
  const [homeScore, setHomeScore] = useState(0);

  const [awayScore, setAwayScore] = useState(0);

  const homeTouchDown = () => {
    setHomeScore(homeScore + 7);
  };

  const homeFieldGoal = () => {
    setHomeScore(homeScore + 3);
  };

  const awayTouchDown = () => {
    setAwayScore(awayScore + 7);
  };

  const awayFieldGoal = () => {
    setAwayScore(awayScore + 3);
  };

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Texas Longhorns</h2>

            {/*STEP 3 - change the hardcoded values in these divs */}
            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:07</div>
          <div className="away">
            <h2 className="away__name">Oklahoma Sooners</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* STEP 4 - attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={homeTouchDown}>
            Home Touchdown
          </button>
          <button className="homeButtons__fieldGoal" onClick={homeFieldGoal}>
            Home Field Goal
          </button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={awayTouchDown}>
            Away Touchdown
          </button>
          <button className="awayButtons__fieldGoal" onClick={awayFieldGoal}>
            Away Field Goal
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;