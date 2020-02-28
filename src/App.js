//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

let homeTeam = prompt("Set home team.");
let awayTeam = prompt("Set away team.");

 const Timer = () => {
   const [secondsPassed, setSecondsPassed] = useState(0);
   const [minutesPassed, setMinutesPassed] = useState(0);
   const [quarter, setQuarter] = useState(0);

  useEffect(() => {

    if (minutesPassed < 90) {
       setTimeout(() => setSecondsPassed(secondsPassed + 1), 100)
      if (secondsPassed == 60) {
         secondsPassed = 0
         setMinutesPassed(minutesPassed + 1)
         console.log("1 minute past")
       }
       if (minutesPassed % 15 == 0 && minutesPassed <= 91) {
         setQuarter(quarter + 1)
       }
     }
   })
 }

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.


  const [awayScore, setAwayScore] = useState(0),
  [homeScore, setHomeScore] = useState(0),
  addAwayTD = event => setAwayScore(awayScore + 7),
  addAwayFG = event => setAwayScore(awayScore + 3),
  addHomeTD = event => setHomeScore(homeScore + 7),
  addHomeFG = event => setHomeScore(homeScore + 3);


const [counter, setCounter] = React.useState(0);


  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
          <h2 className="home__name">{homeTeam}</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer"></div>
          <div className="away">
          <h2 className="away__name">{awayTeam}</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}

          <button onClick={addHomeTD} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={addHomeFG} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
        <button onClick={addAwayTD} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={addAwayFG} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
