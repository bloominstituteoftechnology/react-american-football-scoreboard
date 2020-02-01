//TODO: STEP 1 - Import the useState hook.
import React from "react";
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.


const [lionsTeamScore, setLionsScore] = useState(0)
const [tigersTeamScore, setTigersScore] = useState(0)

const lionsClickForTD = () => setLionsScore(lionsTeamScore + 7);
const lionsClickForFG = () => setLionsScore(lionsTeamScore + 3);
const tigersClickForTD = () => setTigersScore(tigersTeamScore + 7);
const tigersClickForFG = () => setTigersScore(tigersTeamScore + 7);


  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}


  <div className="home__score">{lionsTeamScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tigersTeamScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={lionsClickForTD}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={lionsClickForFG}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={tigersClickForTD}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={tigersClickForFG}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
