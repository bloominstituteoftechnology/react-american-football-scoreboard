//TODO: STEP 1 - Import the useState hook.
import React from "react";
import { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import HomeTouchDown from "./Components/Buttons/HomeButtons/HomeTouchdown";
import HomeFieldGoal from "./Components/Buttons/HomeButtons/HomeFieldGoal";
import AwayTouchDown from "./Components/Buttons/AwayButtons/AwayTouchdown"
import AwayFieldGoal from "./Components/Buttons/AwayButtons/AwayFieldGoal";

function App() {
  //TODO: STEP 2 - Establish your application's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [score, newScore] = useState(0);
  const [awayScore, newAwayScore] = useState(0);
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{score}</div>
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
          <HomeTouchDown />
          <HomeFieldGoal newScore = {newScore} score = {score}/>
        </div>
        <div className="awayButtons">
          <AwayTouchDown />
          <AwayFieldGoal />
        </div>
      </section>
    </div>
  );
}

export default App;
