//TODO: STEP 1 - Import the useState hook.
import React, {useState, useEffect} from "react";
import "./App.css";
import BottomRow from "./BottomRow";


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const number = 0;
  const [homeScore, setHomeScore] = useState(number);
  const [awayScore, setAwayScore] = useState(number);

  const [minutesLeft, setMinutesLeft] = useState(14);
  const [secondsLeft, setSecondsLeft] = useState(59);
  // const [timeLeft, setTimeLeft] = useState(10);
  
  // setInterval(function(){setSecondsLeft(seconds - 1); }, 1000);

  useEffect(() => {
    setInterval(() => {
      setSecondsLeft(secondsLeft - 1);
    }, 1000);
  });

  if (secondsLeft === 0){
    setMinutesLeft(minutesLeft - 1);
    setSecondsLeft(secondsLeft + 59);
  };

  
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">BattleHawks</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">{minutesLeft}:{secondsLeft}</div>
          <div className="away">
            <h2 className="away__name">Roughnecks</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => setHomeScore(homeScore + 6)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => setHomeScore(homeScore + 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => setAwayScore(awayScore + 6)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => setAwayScore(awayScore + 3)}>Away Field Goal</button>
        </div>
        {/* <div>
         <button onClick={startTimer}>start</button>
         <button onClick={stopTimer}>stop</button>
         <button onClick={resetTimer}>reset</button>
       </div> */}
      </section>
    </div>
  );
}

export default App;


