//TODO: STEP 1 - Import the useState hook.
import React, {useState, useEffect} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeValue, newHomeValue] = useState(0);
  const [awayValue, newAwayValue] = useState(0);
  const [quarter, setQuarter] = useState(1);
  const [ timer, setTimer ] =useState(45);
   
  useEffect( ()=>{
    const clock = setTimeout(()=>{
      if (timer > 0 ) {
        setTimer(timer-1)
      }
      else {
        clearTimeout(clock)
      }
    }, 1000)
}, [timer]
)
  
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Colts</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeValue}</div>
          </div>
          <div className="timer">00:{timer}</div>                                                                                                                                                                                                                                                                                                                                                                                                                                         
          <div className="away">
            <h2 className="away__name">Vikings</h2>
            <div className="away__score">{awayValue}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={() => newHomeValue(homeValue + 7)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={() => newHomeValue(homeValue + 3)} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        
       {/*<div className="quarterButton">
         
         <button onClick={() => setQuarter(quarter + 1)} className="quarter">Quarter</button>
  </div>*/}

        <div className="awayButtons">
          <button onClick={() => newAwayValue(awayValue + 7)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={() => newAwayValue(awayValue + 7)} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;