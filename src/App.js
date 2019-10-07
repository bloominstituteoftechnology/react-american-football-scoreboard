//TODO: STEP 1 - Import the useState hook. Done!
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";




function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [homeScore, homeSetScore] = useState(0);
  const [awayScore, awaySetScore] = useState(0);

  // console.log(lionScore);

  return (
    // THIS IS THE MAIN ASSIGNMENT
  //   <div className="container">
  //   <section className="scoreboard">
  //     <div className="topRow">
  //       <div className="home">
  //         <h2 className="home__name">Lions</h2>

  //         {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

  //         <div className="home__score">{homeScore} </div>
  //       </div>
  //       <div className="timer">00:03</div>
  //       <div className="away">
  //         <h2 className="away__name">Tigers</h2>
  //         <div className="away__score">{awayScore}</div>
  //       </div>
  //     </div>
  //     <BottomRow />
  //   </section>
  //   <section className="buttons">
  //     <div className="homeButtons">
  //       {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
  //       <button onClick = {() => homeSetScore(homeScore + 7)} className="homeButtons__touchdown">Home Touchdown</button>
  //       <button onClick = {() => homeSetScore(homeScore + 3)} className="homeButtons__fieldGoal">Home Field Goal</button>
  //     </div>
  //     <div className="awayButtons">
  //       <button onClick = {() => awaySetScore(awayScore + 7)} className="awayButtons__touchdown">Away Touchdown</button>
  //       <button onClick = {() => awaySetScore(awayScore + 3)} className="awayButtons__fieldGoal">Away Field Goal</button>
  //     </div>
  //   </section>
  // </div>
    <div className="container">
      <section className="scoreboard">
        
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore} </div>
          </div>
          <div>
            <h1>Pewee Blurnsball</h1>
            <div className="timer">00:03</div>
          </div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick = {() => homeSetScore(homeScore + 7)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick = {() => homeSetScore(homeScore + 3)} className="homeButtons__fieldGoal">Home Field Goal</button>
          <button onClick = {() => homeSetScore(homeScore + 100)} className="homeButtons__touchdown">No Tears During Game</button>
          <button onClick = {() => homeSetScore(homeScore - 200)} className="homeButtons__touchdown">Parental Outburst</button>
          <button onClick = {() => homeSetScore(homeScore * 0)} className="homeButtons__touchdown">"This game isn't fair"</button>

        </div>
        <div className="awayButtons">
          <button onClick = {() => awaySetScore(awayScore + 7)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick = {() => awaySetScore(awayScore + 3)} className="awayButtons__fieldGoal">Away Field Goal</button>
          <button onClick = {() => awaySetScore(awayScore + 100)} className="awayButtons__fieldGoal">No Tears During Game</button>
          <button onClick = {() => awaySetScore(awayScore - 200)} className="awayButtons__fieldGoal">Parental Outburst</button>
          <button onClick = {() => awaySetScore(awayScore * 0)} className="awayButtons__fieldGoal">"This game isn't fair"</button>
        </div>
      </section>
    </div>
  );
}

export default App;
