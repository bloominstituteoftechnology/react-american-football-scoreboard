//TODO: STEP 1 - Import the useState hook.
//import React from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import React, {useState} from 'react';

//const [value] = useState();

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  
  //You'll need one for the home score and another for the away score.

  const [home, setHome] = useState(false);
  const [away, setAway] = useState(false);

  return (
   <div className = 'App'>
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{home}</div>
          </div>
          <div className="timer">{home}</div>
          <div className="away">
            <h2 className="away__name">{away}</h2>
            <div className="away__score">{away}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown App" onClick={useState(false)}>Home Touchdown</button>
          
          <button className="homeButtons__fieldGoal App" onClick={useState(false)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown App" onClick={useState(false)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal App" onClick={useState(false)}>Away Field Goal</button>
        </div>
      </section>
    </div>
    </div>
  );
}
const rootElement = document.getElementById("root");
render(<App />, rootElement);

export default App;
