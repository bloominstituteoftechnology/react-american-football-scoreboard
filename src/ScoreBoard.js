//TODO: STEP 1 - Import the useState hook.
import {useState} from "react";
import React from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import TopRow from "./TopRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [scoreLions, setValueLions] = useState(0);
  const [scoreTigers, setValueTigers] = useState(0);

  return (
    <div className="container">
      <section className="scoreboard">
        {/* <TopRow /> */}
        hello

        {/* <BottomRow /> */}
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => setValueLions(scoreLions + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => setValueLions(scoreLions + 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => setValueTigers(scoreTigers + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => setValueTigers(scoreTigers + 3)}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;




