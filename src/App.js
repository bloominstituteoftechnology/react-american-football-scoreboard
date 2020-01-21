//TODO: STEP 1 - Import the useState hook.
import React, {useState, useEffect} from "react";
import "./App.css";
import BottomRow from "./BottomRow";
// import Timer from "./Timer"
function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
let [homeScore, setHomeScore] = useState(0);
let [awayScore, setAwayScore] = useState(0);


// TouchDown
const homeTouchDown = e =>{
  setHomeScore(homeScore+7);
}
const awayTouchDown = e =>{
  setAwayScore(awayScore+7);
}

// Field Goal
const homeFieldGoal = e =>{
  setHomeScore(homeScore+3);
}
const awayFieldGoal = e =>{
  setAwayScore(awayScore+3);
}
// Reset Score
const homeReset = e =>{
  setHomeScore(homeScore=0);
}
const awayReset = e =>{
  setAwayScore(awayScore=0);
}
let seconds;
let reset;
const [homeName, newHomeName] = useState('Home')
const [awayName, newAwayName] = useState('Away')
  return (
    
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name" contentEditable='true'>{homeName}</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:{seconds}</div>
          <button onClick={reset}>Reset Clock</button>
          <div className="away">
            <h2 className="away__name">{awayName}</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={homeTouchDown}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={homeFieldGoal}>Home Field Goal</button>
          <button onClick={homeReset}>Home Reset Score</button>
          
        </div>
        
        <div className="awayButtons">
          <button className="awayButtons__touchdown"onClick={awayTouchDown}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal"onClick={awayFieldGoal}>Away Field Goal</button>
          <button onClick={awayReset}>Away Reset Score</button>
          
        </div>
      </section>
    </div>
  );
}


export default App;
