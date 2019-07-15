//TODO: STEP 1 - Import the useState hook.
import React, { useState } from 'react';
import "./App.css";
import BottomRow from "./BottomRow";


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  let [lionsH, setLionsH] = useState(10);
  let [tigersA, setTigersA] = useState(20);
  console.log(lionsH);
  console.log(tigersA);
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>
            {lionsH}
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            {tigersA}
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          <button className="homeButtons__touchdown" onClick={() => setLionsH(lionsH + 7)}>
            Home Touchdown
          </button>
          <button className="homeButtons__fieldGoal" onClick={() => setLionsH(lionsH + 3)}>
            Home Field Goal
          </button>
        </div>
        <div className="awayButtons">
          {setTigersA}
          <button className="awayButtons__touchdown" onClick={() => setTigersA(tigersA + 7)}>
            Away Touchdown
          </button>
          <button className="awayButtons__fieldGoal" onClick={() => setTigersA(tigersA + 3)}>
            Away Field Goal</button>
          </div>
      </section>
    </div>
  );
}

export default App;
