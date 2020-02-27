//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

//export { downs };
//export { quarter };

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeValue, setHomeValue] = useState(0);
  const [awayValue, setAwayValue] = useState(0);
  const [quarter, setQuarter] = useState(1);
  const [downs, setDowns] = useState(1);

  const feildGoal = 3;
  const touchdown = 7;

  console.log(downs);
  console.log(quarter);
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeValue}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayValue}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => { setHomeValue(homeValue + touchdown) }} >Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => { setHomeValue(homeValue + feildGoal) }}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => { setAwayValue(awayValue + touchdown) }}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => { setAwayValue(awayValue + feildGoal) }}>Away Field Goal</button>
        </div>
        <div className="gameButtons">
          <button className="quarter_button" onClick={() => {
            if (quarter === 4) {
              setQuarter(1);
            } else {
              setQuarter(quarter + 1)
            }
          }}>Change Quarter</button>
          <button className="downs_button" onClick={() => {
            if (downs === 4) {
              setDowns(1);
            } else {
              setDowns(downs + 1)
            }
          }}>Change Downs</button>
        </div>
      </section>
    </div>
  );
}

export default App;
