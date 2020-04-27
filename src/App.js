//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import BottomRow from "./BottomRow";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  let [homeScore, setHomeScore] = useState(0)
  let [awayScore, setAwayScore] = useState(0)
  let play = event => {
    if(event.target.className === 'homeButtons__touchdown'){
      setHomeScore(homeScore + 7)
    } 
    else if(event.target.className === 'homeButtons__fieldGoal'){
      setHomeScore(homeScore + 3)
    }
    else if(event.target.className === 'awayButtons__touchdown'){
      setAwayScore(awayScore + 7)
    }
    else if(event.target.className === 'awayButtons__fieldGoal'){
      setAwayScore(awayScore + 3)
    }
    else{
      setHomeScore(homeScore = 0)
      setAwayScore(awayScore = 0)
    }
  }
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
          <button onClick={play}className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={play}className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
          <button onClick={play} className="reset-score">Reset Score</button>
        <div className="awayButtons">
          <button onClick={play}className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={play}className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
