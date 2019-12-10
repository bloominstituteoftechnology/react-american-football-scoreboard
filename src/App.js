//TODO: STEP 1 - Import the useState hook.
import React, { useState } from 'react';
import './App.css';
import BottomRow from './BottomRow';

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const home = e => {
    setHomeScore(homeScore + 1);
  };
  const away = e => {
    setAwayScore(awayScore + 1);
  };

  const reset = e => {
    setAwayScore(0);
  };

  const makePtWin = e => {};

  if (awayScore >= 5) {
    alert('no team scores that much(only Portugal)');
    setAwayScore(0);
  }

  return (
    <div className="container">
      <h1>The real football</h1>

      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Port.</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Spain</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={home} className="homeButtons__touchdown">
            Home Goal
          </button>
          <button onClick={reset} className="homeButtons__touchdown">
            Reset Game
          </button>
          <button onClick={makePtWin} className="homeButtons__touchdown">
            Make Portugal Win!
          </button>
        </div>
        <div className="awayButtons">
          <button onClick={away} className="awayButtons__touchdown">
            Away Goal
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
