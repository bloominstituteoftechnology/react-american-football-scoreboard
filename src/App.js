//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import Header from "./Header";
import Buttons from "./Buttons";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.


  const [lions, lionsScore] = useState(0);
  const [tigers, tigersScore] = useState(0);
  
  
  return (
    <div className="container">
      <Header />
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

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
      <Buttons 
      lionsScore = {lionsScore}
      tigersScore = {tigersScore}
      lions = {lions}
      tigers = {tigers}
      />
    </div>
  );
}

export default App;
