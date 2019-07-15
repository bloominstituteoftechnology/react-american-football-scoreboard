//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import { useTimer } from "react-timer-hook";
import "./App.css";
import BottomRow from "./BottomRow";

function App(expiryTimestamp) {
  const [home, setHome] = useState(0);
  const [away, setAway] = useState(0);

  const {
    seconds,
    minutes,
    hours,
    days,
    start,
    pause,
    resume,
    restart
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called")
  });

  // const [away, setCount] = useState(0);
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{home}</div>
          </div>
          <div>
            <div className="timer">
              <span>{minutes}</span>:<span>{seconds}</span>
            </div>
            <div>
              <button className="timerButton" onClick={start}>
                Start
              </button>
              <button className="timerButton" onClick={pause}>
                Pause
              </button>
              <button className="timerButton" onClick={resume}>
                Resume
              </button>
              <button
                className="timerButton"
                onClick={() => {
                  // Restarts to 5 minutes timer
                  var t = new Date();
                  t.setSeconds(t.getSeconds() + 900);
                  restart(t);
                }}
              >
                restart
              </button>
            </div>
          </div>

          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{away}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button
            onClick={() => setHome(home + 7)}
            className="homeButtons__touchdown"
          >
            Home Touchdown
          </button>
          <button
            onClick={() => setHome(home + 3)}
            className="homeButtons__fieldGoal"
          >
            Home Field Goal
          </button>
          <button onClick={() => setHome(0)} className="awayButtons__fieldGoal">
            Clear Home Score
          </button>
        </div>
        <div className="awayButtons">
          <button
            onClick={() => setAway(away + 7)}
            className="awayButtons__touchdown"
          >
            Away Touchdown
          </button>
          <button
            onClick={() => setAway(away + 3)}
            className="awayButtons__fieldGoal"
          >
            Away Field Goal
          </button>
          <button onClick={() => setAway(0)} className="awayButtons__fieldGoal">
            Clear Away Score
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
