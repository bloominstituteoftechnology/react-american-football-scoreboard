//TODO: STEP 1 - Import the useState hook.
import React ,{useState} from "react";//  Imported hook useState
import BottomRow from "./BottomRow";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeSco, setHomeSc] = useState(0) // home set to 0 for starting score
  const [awaySco, setAwaySc] = useState(0) // away set to 0 for starting score

  let homeTchDwn = el => {
    setHomeSc(homeSco + 7)// home set to current score + 7 for touchdown
  }

  let AwayTchDwn = el => {
    setAwaySc(awaySco + 7)// away set to current score + 7 for touchdown
  }

  let homeFldGol = el => {
    setHomeSc(homeSco + 3)// home set to current score + 3 for Fild Goal
  }
  
  let fildFldGol = el => {
    setAwaySc(awaySco + 3)// away set to current score + 3 for Fild Goal
  }



  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
  <div className="home__score">{homeSco}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awaySco}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown">Home Touchdown</button>
          <button className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown">Away Touchdown</button>
          <button className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
