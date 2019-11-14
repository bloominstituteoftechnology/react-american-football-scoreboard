//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(14);
  const [awayScore, setAwayScore] = useState(0);
  // handlers 
  //touchdowns
  const homeTouchDown = () => {
    setHomeScore(homeScore + 7);
  };
  const awayTouchDowm =()=> {
    setAwayScore(awayScore +7);
  };
  //fieldgoal
const homeFieldGoal=()=>{
  setHomeScore(homeScore +3);
};
const awayFieldGoal=()=>{
  setAwayScore(awayScore +3);
};

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button
            onClick={() => setHomeScore(homeScore + 7)}
            className="homeButtons__touchdown"
          >
            Home Touchdown
          </button>
          <button
            onClick={() => setHomeScore(homeScore + 3)}
            className="homeButtons__fieldGoal"
          >
            Home Field Goal
          </button>
          <button onClick={() => setHomeScore(0)} className="awayButtons__fieldGoal">
            Clear Home Score
          </button>
        </div>
        <div className="awayButtons">
          <button
            onClick={() => setAwayScore(awayScore + 7)}
            className="awayButtons__touchdown"
          >
            Away Touchdown
          </button>
          <button
            onClick={() => setAwayScore(awayScore + 3)}
            className="awayButtons__fieldGoal"
          >
            Away Field Goal
          </button>
          <button onClick={() => setAwayScore(0)} className="awayButtons__fieldGoal">
            Clear Away Score
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;