//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your application's state with some useState hooks.  You'll need one for the home score and another for the away score.
  
  const [homeScore, updateHomeScore] = useState(19);
  const [awayScore, updateAwayScore] = useState(27);
  
  // const[timer, updateTimer] = useState{15*60*1000} //Timer for stretch
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     updateTimer(timer => timer-1)
  //   }, 1000)
  // return () => clearInterval(interval)
  // }, [])


  // const [quarter,updateQuarter] = useState(1)
  // useEffect(() => {
  //   if(timer<1) {
  //     updateTimer(15)
  //     updateQuarter(quarter+1)
  //   }
  // }, [timer, quarter])
  
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
    

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">{0.3}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
        
      </section>
      
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */
          }
          <button onClick={() => updateHomeScore(homeScore + 7)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={() => updateHomeScore(homeScore + 3)} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={() => updateAwayScore(awayScore + 7)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={() => updateAwayScore(awayScore + 3)} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
        
      </section>
    </div>
  );
}

export default App;
