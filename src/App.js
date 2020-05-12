//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import BottomRow from "./BottomRow";
import './App.css';

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homescore, setHomescore] = useState(0); 
  const [awayscore, setAwayscore] = useState(0); 

  const addTouchdown = event => {
    setHomescore(homescore + 7)
  }
  const addFieldGoal = event => {
    setHomescore(homescore + 3)
  }
  
  const addAwayTouchdown= event => {
    setAwayscore(awayscore + 7)
  }
  const addAwayFieldGoal= event  => {
    setAwayscore(awayscore + 3)
  }

  //End of Step 2 
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{homescore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayscore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick= {addTouchdown}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick= {addFieldGoal}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick= {addAwayTouchdown}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick= {addAwayFieldGoal}>Away Field Goal</button>
        </div>
      </section>
    </div>
    );
  }

export default App;
