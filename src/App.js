//TODO: STEP 1 - Import the useState hook.
import React from "react";
import BottomRow from "./BottomRow";
import "./App.css";
import { useState } from "react";

export default function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [homeScore, homeSetScore] = useState(0);
  const [awayCount, setAwayCount] = useState(0);
  const [timer, timerSetCount] = useState(0);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">{timer}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayCount}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick="homeButtons__touchdown" onClick={() => homeSetScore(homeScore + 7)}>Home Touchdown</button>
          <button onClick="homeButtons__fieldGoal" onClick={() => homeSetScore(homeScore + 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick="awayButtons__touchdown" onClick={() => setAwayCount(awayCount + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => setAwayCount(awayCount + 3)}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

//export default App;
