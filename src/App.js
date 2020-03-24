//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  
    let [awayScore, setAwayScore] = useState(0);
    let [homeScore, setHomeScore] = useState(0);
//   const [timer] = useState('15:00');
//   const [down, setDown] = useState(0);
//   const [toGo, setDistance] = useState(0);
//   const [ballOn, setYardline] = useState(0);
//   const [quarter, setQuarter] = useState(0);

  function addScore(team, score) {
      (team === 'home') ? setHomeScore(homeScore + score): setAwayScore(awayScore + score);
  }
  function subScore(team, score) {
      if (team === 'home') {
          (homeScore <= score) ? setHomeScore(homeScore = 0) : setHomeScore(homeScore - score);
      } else {
          (awayScore <= score) ? setAwayScore(awayScore = 0) : setAwayScore(awayScore - score);
      }
  }

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
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          {/* create a function that takes in either home/away score, reacts appropriately */}
          <p>Home Touchdown</p> 
          <button onClick={() => addScore('home', 7)}className="homeButtons__touchdown">+</button>
          <button onClick={() => subScore('home', 7)} className='homeButtons__touchdown'>-</button>
          <p>Home Field Goal</p>
          <button onClick={() => addScore('home', 3)}className="homeButtons__fieldGoal">+</button>
          <button onClick={() => subScore('home', 3)} className='homeButtons__fieldGoal'>-</button>
          <button onClick={() => setHomeScore(homeScore = 0)}className="homeButtons__touchdown">Reset All</button>
        </div>
        <div className="awayButtons">
          <p>Away Touchdown</p>
          <button onClick={() => addScore('away', 7)}className="awayButtons__touchdown">+</button>
          <button onClick={() => subScore('away', 7)} className='awayButtons__touchdown'>-</button>
          <p>Away Field Goal</p>
          <button onClick={() => addScore('away', 3)}className="awayButtons__fieldGoal">+</button>
          <button onClick={() => subScore('away', 3)} className='awayButtons__fieldGoal'>-</button>
        </div>
      </section>
    </div>
  );
}

export default App;
