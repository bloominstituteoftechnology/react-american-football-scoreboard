import React, { useState } from 'react';
import './App.css';
import BottomRow from './BottomRow';

function App() {
  const [homeScore] = useState(0);
  const [awayScore] = useState(0);

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
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" type="button">Home Touchdown</button>
          <button className="homeButtons__fieldGoal" type="button">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" type="button">Away Touchdown</button>
          <button className="awayButtons__fieldGoal" type="button">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
