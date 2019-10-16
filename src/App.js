//TODO: STEP 1 - Import the useState hook.// 
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";


  function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [pointsHome, setPointsHome] = useState(0);
  const [pointsAway, setPointsAway] = useState(0);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>


            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">32</div>
            {/* <div className="home__score">32</div> */}
            <div className="home__score">{pointsHome}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">32</div>
            {/* <div className="away__score">32</div> */}
            <div className="away__score">{pointsAway}</div>
          </div>
        </div>
        </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown">Home Touchdown</button>
          <button className="homeButtons__fieldGoal">Home Field Goal</button>
          <button
            className="homeButtons__touchdown"
            onClick={() => setPointsHome(pointsHome + 7)}
          >
            Home Touchdown
          </button>
          <button
            className="homeButtons__fieldGoal"
            onClick={() => setPointsHome(pointsHome + 3)}
          >
            Home Field Goal
          </button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown">Away Touchdown</button>
          <button className="awayButtons__fieldGoal">Away Field Goal</button>
          <button
            className="awayButtons__touchdown"
            onClick={() => setPointsAway(pointsAway + 7)}
          >
           Away Touchdown
          </button>
          <button
            className="awayButtons__fieldGoal"
            onClick={() => setPointsAway(pointsAway + 3)}
          >
            Away Field Goal
          </button>
        
        </div>
      </section>     
    </div>
     
  )}

  export default App;
  