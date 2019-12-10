//TODO: STEP 1 - Import the useState hook.
import React, {useState, useEffect} from "react"; //stretch useeffect resource https://reactjs.org/docs/hooks-effect.html
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [lionsScore, setLionsScore] = useState(0);
  const [tigersScore, setTigersScore] = useState(0);

  //stretch goal timer
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(60);

  //compound for loop function for minutes
  useEffect(() => {
    const clock = setTimeout(() => {
      if (minutes > 0) {
        setMinutes(minutes - 1);
      } else {
        clearTimeout(clock);
      }
    }, 60 * 1000);
  }, [minutes]);

  //compound for loop function for seconds
  useEffect(() => {
    const clock = setTimeout(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        clearTimeout(clock);
      }
    }, 1000)
  }, [seconds]);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

  <div className="home__score">{lionsScore}</div>
          </div>
<div className="timer">{minutes}:{seconds}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
  <div className="away__score">{tigersScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => {setLionsScore(lionsScore + 7)}}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => {setLionsScore(lionsScore + 3)}}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => {setTigersScore(tigersScore + 7)}}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => {setTigersScore(tigersScore + 3)}}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
