//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from "react";
import "./App.css";
import BottomRow from "./BottomRow";


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
const [awayScore, setAwayScore] = useState(0); //Sets initial state score to 0
const [homeScore, setHomeScore] = useState(0); //Sets initial state score to 0
const [minutes, changeMinutes] = useState(15);
const [seconds, changeSeconds] = useState(0);
useEffect(()=> {  
  let interval = setInterval( () => {
    changeSeconds(seconds => seconds - 1)
  }, 1000)
  if (seconds === 0) {
    changeSeconds(59);
    changeMinutes(minutes - 1);
  }
  return () => clearInterval(interval);
 }, [minutes, seconds]) 


return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

		  <div className="home__score">{awayScore}</div>
          </div>
          <div className="timer">
            {minutes} : {seconds}
          </div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{homeScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
		  <button onClick={() => {setAwayScore(awayScore + 7);}} className=
		  "awayButtons_touchdown" >Lions Touchdown</button>
		  <button onClick={() => {setAwayScore(awayScore + 3);}} className=
		  "awayButtons_fieldGoal" >Lions Field Goal</button> 
        </div>
        <div className="awayButtons">
		  <button onClick={() => {setHomeScore(homeScore + 7);}} className=
		  "homeButtons_touchdown" >Tigers Touchdown</button>
		  <button onClick={() => {setHomeScore(homeScore + 3);}} className=
		  "homeButtons_fieldGoal" >Tigers Field Goal</button>  
        </div>
      </section>
    </div>
  );
}

export default App;
