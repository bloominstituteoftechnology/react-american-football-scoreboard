//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react"; //import useState
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  //home
  const [homeTeam, setHome] = useState("Lions");
  const [homeScore, setHomeScore] = useState(0);
  //away
  const [awayTeam, setAway] = useState("Tigers");
  const [awayScore, setAwayScore] = useState(0);

  //timer
  const [timer, setTimer] = useState("30:00");

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">{homeTeam}</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">{timer}</div>
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
          {/* - A touchdown is worth 7 points (assume the following extra point is made) - A field goal is worth 3 points */}

          <button
            className="homeButtons__touchdown"
            onClick={event => setHomeScore(homeScore + 7)}
          >
            Home Touchdown
          </button>

          <button
            className="homeButtons__fieldGoal"
            onClick={event => setHomeScore(homeScore + 3)}
          >
            Home Field Goal
          </button>
        </div>
        <div className="awayButtons">
          <button
            className="awayButtons__touchdown"
            onClick={event => setAwayScore(awayScore + 7)}
          >
            Away Touchdown
          </button>
          <button
            className="awayButtons__fieldGoal"
            onClick={event => setAwayScore(awayScore + 3)}
          >
            Away Field Goal
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
