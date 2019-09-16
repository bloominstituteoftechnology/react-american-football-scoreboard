import React, { useState } from 'react';
import './App.css';
import TopRow from './Components/TopRow/TopRow';
import BottomRow from './Components/BottomRow/BottomRow';

function App() {
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow />
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
