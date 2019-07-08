//TODO: STEP 1 - Import the useState hook.
import React from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  const [homeScore, setHomeScore] = useState(32)
const [awayScore, setAwayScore] = useState(32)
const homeTeam = "Colts"
const awayTeam = "Patriots"
const homeTouchdown = () => setHomeScore(homeScore + 7);
const homeFieldgoal = () => setHomeScore(homeScore + 3);
const awayTouchdown = () => setAwayScore(awayScore + 7);
const awayFieldgoal = () => setAwayScore(awayScore + 3);
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">{ homeTeam }</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{ homeScore }</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">{ awayTeam }</h2>
            <div className="away__score">{ awayScore }</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick = {homeTouchdown} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick = {homeFieldgoal} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick = {awayTouchdown} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick = {awayFieldgoal}  className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
