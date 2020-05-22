//TODO: STEP 1 - Import the useState hook.
import React from "react";
import { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
//
function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  // const usingState = useState(0);
  // const stateVar = usingState[0];
  // const setStateVar = usingState[1];
  // console.log(setStateVar);

  const [lionsValue, setLionsValue] = useState(0);

  const [tigersValue, setTigersValue] = useState(0); 
  // const initialValue = 0;
  // useState(initialValue);
  //add 7 function Lions
  const downLions = ()=>{
    setLionsValue (lionsValue + 7)
  }
  //add 3 function Lions
  const goalLions = ()=>{
    setLionsValue (lionsValue + 3)
  }
    //add 7 function Tigers
  const downTigers = ()=>{
    setTigersValue (tigersValue + 7)
  }
  //add 3 function Tigers
  const goalTigers = ()=>{
    setTigersValue (tigersValue + 3)
  }
  
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{lionsValue}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tigersValue}</div>
          </div>
        </div>
        <BottomRow />
      </section>

      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}

          <button onClick={downLions} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={goalLions}className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={downTigers} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={goalTigers} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
