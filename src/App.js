//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import Home from  "./Home.js"
import Away from "./Away.js"
import HomeButtons from "./HomeButtons.js"
import AwayButtons from "./AwayButtons.js"
import BottomRow from "./BottomRow";
import QuarterButton from "./QuarterButton.js"

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [home, setHome] = useState(0)
  const [away, setAway] = useState(0)
  const [quarterButton, setQuarterButton] = useState(1)

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          < Home home = {home} /> 
          <div className="timer">00:03</div>
          < Away away = {away} />
          </div>
        <BottomRow quarterButton = {quarterButton} />
        
      </section>
      <section className="buttons">
        < HomeButtons setHome = {setHome} home = {home} />
        < AwayButtons setAway = {setAway} away = {away} />
        < QuarterButton quarterButton = {quarterButton} setQuarterButton = {setQuarterButton} />
      </section>
    </div>
  );
}

export default App;
