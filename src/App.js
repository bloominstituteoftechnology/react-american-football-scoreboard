//TODO: STEP 1 - Import the useState hook.
import React, { useState } from 'react';
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.


  const [homeScore, setHomescore] = useState(0);
  const [awayScore, setAwayscore] = useState(0);



  const homeTd = (event) => {
    setHomescore(homeScore + 1);
  }

  const awayTd = (event) => {
    setAwayscore(awayScore + 1);
  }

  const homeFG = (event) => {
    setHomescore(homeScore + 1);
  }

  const awayFG = (event) => {
    setAwayscore(awayScore + 2);
  }

  const reset = (event) => {
    setAwayscore(0);
    setHomescore(0)
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Arsenal</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">45:03</div>
          <div className="away">
            <h2 className="away__name">Chelsea</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={homeTd}>Home Goal</button>
          <button>Corner(s)</button>
        </div>

        <div className="buttons">
          <button className="awayButtons__fieldGoal" onClick={reset}>Reset</button>
        </div>

        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={awayTd}> Away Goal</button>
          <button className="awayButtons__fieldGoal" onClick={awayFG}> Corner(s)</button>
        </div>
      </section>
    </div>
  );
}
  export default App;

