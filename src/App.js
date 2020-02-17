//Step 1 - import useState
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {

  //Step 2 - useState hooks for each teams score
  const [lions, lionsScore] = useState(0);
  const [tigers, tigersScore] = useState(0);


  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">

          {/* Step 3: Add scores */}
          <div className="home">
            <h2 className="home__name">Lions</h2>
            <div className="home__score">{lions}</div>
          </div>

          <div className="timer">00:03</div>

          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tigers}</div>
          </div>

        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}

          <button className="homeButtons__touchdown" onClick={() => lionsScore(lions + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => lionsScore(lions + 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => tigersScore(tigers + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => tigersScore(tigers + 3)}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
