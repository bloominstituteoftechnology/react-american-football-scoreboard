//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import BottomRow from "./BottomRow";
import "./App.css";

// import { useState } from 'react';

function App() {
  
const [homeScore, setMainHome] = useState(0);
const [awayScore, setMainAway] = useState(0);
const homeTouchDown = event => {
  setMainHome(homeScore + 6)
}
const homeFieldGoal = event => {
  setMainHome(homeScore + 3)
}
const homeExtra = event =>{
  setMainHome(homeScore + 1)
}
const awayTouchdown = event => {
  setMainAway(awayScore + 6)
}
const awayFieldGoal = event => {
  setMainAway(awayScore + 3)
}
const awayExtra = event => {
  setMainAway(awayScore + 1)
}

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

           
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

         
          <button className="homeButtons__touchdown" onClick={homeTouchDown}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={homeFieldGoal}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown"onClick={awayTouchdown}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={awayFieldGoal}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;