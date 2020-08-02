//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import BottomRow from "./BottomRow";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  const homeScorer = (()=> {
    setHomeScore(homeScore + 7)
  });

  const awayScorer = (()=> {
    setAwayScore(awayScore + 7)
  });

  const homeFieldScorer = (()=> {
   setHomeScore(homeScore + 3)
  });

  const awayFieldScorer = (()=> {
    setAwayScore(awayScore + 3)
  });

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

          <button className="homeButtons__touchdown" onClick={homeScorer}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={homeFieldScorer}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={awayScorer}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={awayFieldScorer}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
