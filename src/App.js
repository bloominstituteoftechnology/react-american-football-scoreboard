//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  let [scoresHome, addScoreHome] = useState(0)
  console.log(useState)
  console.log(scoresHome)
  console.log(addScoreHome)
  let [scoresAway, addScoreAway] = useState(0)
  console.log(useState)
  console.log(scoresAway)
  console.log(addScoreAway)
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{scoresHome}</div>
          </div>
          <div className="timer">00:00</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{scoresAway}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={() => addScoreHome(scoresHome + 6)}className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={() => addScoreHome(scoresHome + 3)}className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={() => addScoreAway(scoresAway + 6)}className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={() => addScoreAway(scoresAway + 3)}className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
