//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);


  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

          const homeTouchdown = e => {
            setHomeScore(homeScore + 7)

          };

          const awayTouchdown = e => {
            setAwayScore(awayScore + 7)
          };

          const homeFg = e => {
            setHomeScore(homeScore + 3)
          };

          const awayFg = e => {
            setAwayScore(awayScore + 3)
          };


            <div className="home__score"></div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score"></div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown">Home Touchdown</button>
            <button onCLick = {homeTouchdown}>The Home Team Scores a TOUCHDOWN!!!</button>
          <button className="homeButtons__fieldGoal">Home Field Goal</button>
            <button onCLick = {homeFg}>The Home Team Scores Field Goala</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown">Away Touchdown</button>
          <button onCLick = {awayTouchdown}>The Home Team Scores</button>
          <button className="awayButtons__fieldGoal">Away Field Goal</button>
            <button onCLick = {awayFg}>The Home Team Scores</button>
        </div>
      </section>
    </div>
  );
}
homeTouchdown();
awayTouchdown();
homeFg();
awayFg();
export default App;
