//TODO: STEP 1 - Import the useState hook.
import React from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import { useState, useEffect } from 'react';



function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [home, homeScore] = useState(4);
  const [away, awayScore] = useState(9);

  const [seconds, setSeconds] = useState(0);
  const [minutes] = useState(0);

  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);
    // if (seconds === 100) {
    //   minutes + 1;
    // }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score"><span>{home}</span></div>
          </div>
          <div className="app">
      <div className="timer">
        {minutes}:{seconds}
      </div>
      <div className="row">
        <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score"><span>{away}</span></div>
        
      </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => homeScore(home + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => homeScore(home + 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => awayScore(away + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal"  onClick={() => awayScore(away + 3)}>Away Field Goal</button>
        </div>
        
      </section>
    </div>
  );
}

export default App;
