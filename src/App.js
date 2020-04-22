//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import BottomRow from "./BottomRow";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  let [homeScore, setScoreHome] = useState(0);
  let [awayScore, setScoreAway] = useState(0);
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

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={()=>{
            setScoreHome(homeScore + 6)
          }}
          >Home Touchdown</button>

          <button className="homeButtons__fieldGoal" onClick = {()=>{
            setScoreHome(homeScore + 1)
          }}
          >Home Extra Point</button>


          <button className="homeButtons__fieldGoal" onClick = {()=>{
            setScoreHome(homeScore + 3)
          }}
          >Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick = {()=>{
            setScoreAway(awayScore + 6)
          }}
          >Away Touchdown</button>

          <button className="awayButtons__touchdown" onClick = {()=>{
            setScoreAway(awayScore + 1)
          }}
          >Away Extra Point</button>
          <button className="awayButtons__fieldGoal" onClick = {()=>{
            setScoreAway(awayScore + 3)
          }}
          >Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
