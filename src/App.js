//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const touchdownPoints = 7;
  const fieldGoalPoints = 3;

  const homeTouchdown = () => setHomeScore(homeScore + touchdownPoints);
  const homeFieldGoal = () => setHomeScore(homeScore + fieldGoalPoints);
  const awayTouchdown = () => setAwayScore(awayScore + touchdownPoints);
  const awayFieldGoal = () => setAwayScore(awayScore + fieldGoalPoints);

  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow homeScore={homeScore} awayScore={awayScore}/>
        <BottomRow />
      </section>
      <ButtonGroup homeT={homeTouchdown} homeFG={homeFieldGoal} awayT={awayTouchdown} awayFG={awayFieldGoal}/>
    </div>
  );
}

function TopRow({homeScore, awayScore}){
  return(
    <div className="topRow">
    <div className="home">
      <h2 className="home__name">Lions</h2>

      {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

      <div className="home__score">{homeScore}</div>
    </div>
    <div className="timer">00:03</div>
    <div className="away">
      <h2 className="away__name">Tigers</h2>
      <div className="away__score">{awayScore}</div>
    </div>
    </div>
  );
}

function ButtonGroup({homeT, homeFG, awayT, awayFG}){
  return(
    <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={homeT} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={homeFG} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={awayT} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={awayFG} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section> 
  )
}

export default App;
