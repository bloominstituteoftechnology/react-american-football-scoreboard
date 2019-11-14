//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
// hook for home team
  const [homeScore, setHomeScore] = useState(0);

// hook for away team

  const [awayScore, setAwayScore] = useState(0);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Raiders</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
 
              {/* added a dynamic score which updates with each click for the home team */}

           <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:01</div>
          <div className="away">
            <h2 className="away__name">Chargers</h2>

        {/* added a dynamic score which updates with each click for the away team */}

  <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">


          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
            {/* added event listeners to the buttons to add the appropriate number of points to the score*/}
            
          <button className="homeButtons__touchdown" onClick = {() => setHomeScore(homeScore +7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick = {() => setHomeScore(homeScore +3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick = {() => setAwayScore(awayScore + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick = {() => setAwayScore(awayScore+3)}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
