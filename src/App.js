//TODO: STEP 1 - Import the useState hook.
import React, {useState}  from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeValue, setValue_h] = React.useState(0);
  const [awayValue, setValue_t] = React.useState(0);
  const [homeExtra, setValue_he] = React.useState(0);
  const [awayExtra, setValue_te] = React.useState(0);
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeValue+homeExtra}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayValue+awayExtra}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown"
              onClick={() => {
                setValue_h(homeValue + 6);
              }}
          >Home Touchdown</button>

          <button className="homeButtons__fieldGoal"
              onClick={() => {
                setValue_h(homeValue + 3);
              }}
          >Home Field Goal</button>

          <button className= "homeButtons__extaPoint"
              onClick={() => {
                setValue_he(homeExtra + 1);
              }}
          >Home Extra Point</button>
        </div>
        <div className="awayButtons">
        <button className="awayButtons__touchdown"
              onClick={() => {
                setValue_t(awayValue + 6);
              }}
          >Away Touchdown</button>
          <button className="awayButtons__fieldGoal"
              onClick={() => {
                setValue_t(awayValue + 3);
              }}

          >Away Field Goal</button>

            <button className= "tigresButtons__extaPoint"
              onClick={() => {
                setValue_te(awayExtra + 1);
              }}
          >Tigres Extra Point</button>

        </div>
      </section>
    </div>
  );
}

export default App;
