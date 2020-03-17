//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./components/App.css";
import {BottomRow} from "./components/BottomRow";
import {TopRow} from "./components/TopRow";


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  const setScore = (name, score) => (
    name === 'Lions' ? setHomeScore(score): setAwayScore(score)
    )



  return (
    <div className="container">
      <section className="scoreboard">
       <TopRow homeScore = {homeScore} awayScore = {awayScore}/>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick = {() => setScore('Lions', homeScore + 7)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick = {() => setScore('Lions', homeScore + 3)} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick = {() => setScore('Tigers', awayScore + 7)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick = {() => setScore('Tigers', awayScore + 3)} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
