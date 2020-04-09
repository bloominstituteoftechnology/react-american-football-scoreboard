//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";


function App() {

  const [lionPoints, setLionPoints] = useState(0);

  const addLScoreD = e => {
       setLionPoints(lionPoints + 7);
     };
   
   const addLScoreF = e => {
       setLionPoints(lionPoints + 3);
     }
 

  const [tigerPoints, setTigerPoints] = useState(0);

  const addTScoreD = e => {
    setTigerPoints(tigerPoints + 7);
  }

  const addTScoreF = e => {
    setTigerPoints(tigerPoints + 3);
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>
            <div className="home__score">{lionPoints}</div>


          </div>
          <div className="timer">00:02</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tigerPoints}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick = {addLScoreD}className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick = {addLScoreF} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div  className="awayButtons">
          <button onClick = {addTScoreD}className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick = {addTScoreF} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
} //End of App function 

export default App;
