//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import ScoreButtons from "./ScoreButtons";
import TeamScore from "./TeamScore";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.
  //  You'll need one for the home score and another for the away score.
  const [ homeScore, setHomeScore ] = useState(0)
  const [ awayScore, setAwayScore ] = useState(0)
  const [ ones, setOnes ] = useState(0)
  const [ tens, setTens ] = useState(0)
  const [ minutes, setMinutes ] = useState(0)
  const [ quarter, setQuarter ] = useState(1)

  const addScore = (points, team) => {
    team === 'home' ? setHomeScore(homeScore + points) : setAwayScore(awayScore + points)
  }

  const incrementQuarter = () => {
    quarter < 4 ? setQuarter(quarter + 1) : setQuarter(1)
  }

  const runTimer = () => {
    let seconds = ones + 1
    if (seconds > 9) {
      setOnes(0)
      let secondsTens = tens + 1
      if (secondsTens > 5) {
        setTens(0)
        setMinutes(minutes + 1)
      } else {
        setTens(tens + 1)
      }
      
    } else {
      setOnes(seconds)
    }
  }

  useEffect(() => {
    let interval = setInterval(() => {
      runTimer()
    }, 1000)
    
    return function cleanup() {
      clearInterval(interval)
    }
    
  })

  
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <TeamScore score={homeScore} team={'home'} teamName={'Ducks'} />
          <div className="timer">0{minutes}:{tens}{ones}</div>
          <TeamScore score={awayScore} team={'away'} teamName={'Geese'} />
        </div>
        <BottomRow quarter={quarter} />
      </section>
      <section className="buttons">
        <ScoreButtons addScore={addScore} team={'home'} />
        <ScoreButtons addScore={addScore} team={'away'} />
        <button className="homeButtons__touchdown" onClick={() => incrementQuarter()}>Increment Quarter</button>
      </section>
    </div>
  );
}

export default App;
