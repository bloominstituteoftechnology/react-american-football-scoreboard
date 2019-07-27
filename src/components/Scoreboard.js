import React, { useState } from "react";
import "../App.css";

import BottomRow from "./BottomRow";

const Scoreboard = () => {
  const [homeScore, setHome] = useState(0);
  const [awayScore, setAway] = useState(0);
  return (
    <div>
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
          <button className="homeButtons__touchdown" onClick={() => {setHome(homeScore + 7)}}>
            Home Touchdown
          </button>
          <button className="homeButtons__fieldGoal" onClick={() => {setHome(homeScore + 3)}}>
            Home Field Goal
          </button>
        </div>
        <button className="Buttons__reset" onClick={() => {setHome(0); setAway(0)}}>
            Reset
        </button>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => {setAway(awayScore + 7)}}>
            Away Touchdown
          </button>
          <button className="awayButtons__fieldGoal" onClick={() => {setAway(awayScore + 3)}}>
            Away Field Goal
          </button>
        </div>
      </section>
    </div>
  );
}

export default Scoreboard;