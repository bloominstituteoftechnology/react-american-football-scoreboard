//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import Timer from './Timer';

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  
  const addHomeTouchdown = e => {
    setHomeScore(homeScore + 7)
  };
  const addHomeFieldGoal = e => {
    setHomeScore(homeScore + 3)
  };
  const addAwayTouchdown = e => {
    setAwayScore(awayScore + 7)
  };
  const addAwayFieldGoal = e => {
    setAwayScore(awayScore + 3)
  };


  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 contentEditable = 'true' className="home__name">Home</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            
            <div className="home__score">{homeScore}</div>
          </div>
          <Timer />
          <div className="away">
            <h2 contentEditable = 'true' className="away__name">Away</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={addHomeTouchdown} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={addHomeFieldGoal} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        
        <div className="awayButtons">
          <button onClick={addAwayTouchdown} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={addAwayFieldGoal} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
      
    </div>
  );
}

export default App;
