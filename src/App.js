//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import BottomRow from "./BottomRow";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  // ----------------- HOME SCORES -----------------
  const [startScoreHome, setScoreHome] = useState(0);
  const homeTD = e => {
    setScoreHome(startScoreHome + 6);
  }
  const homeFG = e =>{
    setScoreHome(startScoreHome + 3);
  }
  // ----------------- HOME SCORES -----------------
  // -----------------------------------------------
  // ----------------- AWAY SCORES -----------------
  const [startScoreAway, setScoreAway] = useState(0);
  const awayTD = e => {
    setScoreAway(startScoreAway + 6);
  }
  const awayFG = e =>{
    setScoreAway(startScoreAway + 3);
  }

  // ----------------- AWAY SCORES -----------------

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{startScoreHome}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{startScoreAway}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={homeTD} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={homeFG} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={awayTD} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={awayFG} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
