//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import Scoreboard from "./scoreboard";




function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  return (
    <div className="container">
      
        <Scoreboard />
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => setHomeScore(homeScore + 10)}>Gryffindor Scores!</button>
          <button className="homeButtons__fieldGoal" onClick={() => setHomeScore(homeScore + 150)}>Gryffindor Catches the Snitch!</button>
        </div>
        <div className="awayButtons">
        <button className="awayButtons__touchdown" onClick={() => setAwayScore(awayScore + 10)}>Slytherin Scores!</button>
          <button className="awayButtons__fieldGoal" onClick={() => setAwayScore(awayScore + 150)}>Slytherin Catches the Snitch!</button>
        </div>
      </section>
    </div>
  );
}

export default App;
