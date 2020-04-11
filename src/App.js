//TODO: STEP 1 - Import the useState hook.
import React from "react";
import { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import HomeTouchDown from "./Components/Buttons/HomeButtons/HomeTouchdown";
import HomeFieldGoal from "./Components/Buttons/HomeButtons/HomeFieldGoal";
import AwayTouchDown from "./Components/Buttons/AwayButtons/AwayTouchdown"
import AwayFieldGoal from "./Components/Buttons/AwayButtons/AwayFieldGoal";
import Away from "./Components/ScoreBoard/Away";
import Home from "./Components/ScoreBoard/Home";
function App() {
  //TODO: STEP 2 - Establish your application's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [score, newScore] = useState(0);
  const [awayScore, newAwayScore] = useState(0);

  const addHomeFieldGoal = () => {
    newScore(score + 3);
  };

  const addAwayFieldGoal = () => {
    newAwayScore(awayScore + 3);
  };


  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
      
        {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

          <Home score ={score}/>
          <div className="timer">00:03</div>
          <Away awayScore = {awayScore}/>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <HomeTouchDown newScore = {newScore} score = {score}/>
          <HomeFieldGoal fieldGoal = {addHomeFieldGoal}/>
        </div>
        <div className="awayButtons">
          <AwayTouchDown newAwayScore = {newAwayScore} awayScore = {awayScore}/>
          <AwayFieldGoal fieldGoal = {addAwayFieldGoal}/>
        </div>
      </section>
    </div>
  );
};

export default App;
