import React, { useState } from 'react';
import './App.css';
import BottomRow from './BottomRow';

function App() {
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          <button
            className="homeButtons__touchdown"
            type="button"
            onClick={() => {
              setHomeScore(homeScore + 7);
            }}
          >
Home Touchdown
          </button>
          <button
            className="homeButtons__fieldGoal"
            type="button"
            onClick={() => {
              setHomeScore(homeScore + 3);
            }}
          >
Home Field Goal
          </button>
        </div>
        <div className="awayButtons">
          <button
            className="awayButtons__touchdown"
            type="button"
            onClick={() => {
              setAwayScore(awayScore + 7);
            }}
          >
Away Touchdown
          </button>
          <button
            className="awayButtons__fieldGoal"
            type="button"
            onClick={() => {
              setAwayScore(awayScore + 3);
            }}
          >
Away Field Goal
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
