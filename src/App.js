//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";

import Buttons from './components/buttons'
import ScoreBoard from "./components/scoreBoard";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setScore] = useState(20)
  const [awayValue, setValue] = useState(15)
  const [homeTeamName, setHomeName] = useState('Tiger')
  const [awayTeamName, setAwayName] = useState(15)
 
  const homeTouchDown = e => {
    setScore(homeScore + 7);
  }
  const homeFieldGoal = e => {
    setScore(homeScore + 3);
  }
 
  const awayTouchDown = e => {
    setValue(awayValue + 7);
  }
  const awayFieldGoal = e => {
    setValue(awayValue + 3);
  }

  const resetAwayScore = e => {
    setValue( awayValue * 0 )
  }
  const resetHomeScore = e => {
    setScore( homeScore * 0 )
  }
  const handler = e => {
    setHomeName(homeTeamName);
  }

  return (
    <div className="container">
      <ScoreBoard 
        homeScore = {homeScore} 
        awayValue = {awayValue} 
        setScore = {setScore} 
        setValue = {setValue}
        setHomeName = {setHomeName}
        homeTeamName = {homeTeamName}
        />
      <Buttons 
        homeTouchDown= {homeTouchDown} 
        homeFieldGoal= {homeFieldGoal} 
        awayTouchDown= {awayTouchDown} 
        awayFieldGoal= {awayFieldGoal} 
        resetAwayScore= {resetAwayScore} 
        resetHomeScore= {resetHomeScore} 
        />
    </div>
  );
}

export default App;
