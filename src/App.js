//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your application's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  
  // * * * * * * IMPLEMENTATION WITHOUT scoreHandler: start

  // const homeTouchdown = () => setHomeScore(homeScore + 7);
  // const homeFieldGoal = () => setHomeScore(homeScore + 3);
  // const awayTouchdown = () => setAwayScore(awayScore +7);
  // const awayFieldGoal = () => setAwayScore(awayScore + 3);

  // * * * * * * IMPLEMENTATION WITHOUT scoreHandler: end

  const scoreHandler = (team, points) => {
    if (team === 'home') setHomeScore(homeScore + points);
    if (team === 'away') setAwayScore(awayScore + points);
  };

  let [quarter, setQuarter] = useState(1);

  const advanceQuarter = () => {
    if (quarter === 4) quarter = 0;
    setQuarter(++quarter);
  };

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow quarter={quarter} />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => scoreHandler('home', 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => scoreHandler('home', 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => scoreHandler('away', 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => scoreHandler('away', 3)}>Away Field Goal</button>
        </div>
        <div className="gameButtons">
  <button className="gameButtons__nextQuarter" onClick={advanceQuarter}>Next Quarter</button>
        </div>
      </section>
    </div>
  );
}

export default App;
