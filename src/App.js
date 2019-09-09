//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App(props) {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  // const [score, setScore ] = useState(0);
  const [lionScore, lionSetscore] = useState(0);
  const[tigerScore, tigerSetscore] = useState(0);

  const touchDownLion = () => {
    lionSetscore(lionScore + 7);
  };

  const fieldGoalLion = () => {
    lionSetscore(lionScore + 3);
  };

  const touchDownTiger = () => {
    tigerSetscore(tigerScore + 7);
  };

  const fieldGoalTiger = () => {
    tigerSetscore(tigerScore + 3);
  };

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
            <div className="away__score">{tigerScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */
          // <button onClick={touchDown}></button>
          // <button onClick={fieldGoal}></button>
          }
          
          <button onClick={touchDownLion} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={fieldGoalLion} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={touchDownTiger} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={fieldGoalTiger} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
