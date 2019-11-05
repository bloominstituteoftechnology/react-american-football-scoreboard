//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import { setState } from "expect/build/jestMatchersObject";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [score, setScore] = useState(0); // lions

  const [points, setPoints] = useState(0); // tigers

  const [q, setQ] = useState(1); // quarter numbers staring at 1


  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{score}</div>
          </div>
          <div className="timer">00:33</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{points}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick = {() => setScore (score + 7)} className="homeButtons__touchdown"  >Home Touchdown</button>
          <button onClick = {() => setScore (score + 3)} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick = {() => setPoints (points + 7)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick = {() => setPoints (points + 3)} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
        <div className="quarterButton">
          <button onClick = {() => setQ (q + 1)} className="awayButtons__touchdown">Quarter</button>
          
        </div>
        {/* stretch goal to make quarters change  */}

      </section>
    </div>
  );
}

export default App;
