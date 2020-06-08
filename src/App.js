//TODO: STEP 1 - Import the useState hook.
import React ,{useState}from "react";
import BottomRow from "./BottomRow";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [lionScore , setlionScore] = useState(0);
  const [tigersScore , settigersScore] = useState(0);

  const homeTouchDown = f => {setlionScore(lionScore + 7)};
  const homeFieldGoal = f => {setlionScore(lionScore+ 3)};
  const awayTouchDown = f => {settigersScore(tigersScore + 7)};
  const awayFieldGoal = f => {settigersScore(tigersScore + 3)};
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{lionScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tigersScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick ={homeTouchDown}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal"onClick ={homeFieldGoal}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick ={awayTouchDown}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal"onClick ={awayFieldGoal}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
