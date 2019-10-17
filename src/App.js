//TODO: STEP 1 - Import the useState hook.// 
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

  function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [pointsHome, setPointsHome] = useState(0);
  const [pointsAway, setPointsAway] = useState(0);

// //stretch constants
// const [downVal, setDown] = useState(3);
// const [yardsTilFirst, setYards] = useState(7);
// const [ballOnYard, setBallOn] = useState(21);
// const [quarter, setQuarter] = useState(1);

// //Functions for stretch goals
// const quarterInc = () => {
//   if (quarter < 4) {
//     setQuarter(quarter + 1);
//   } else {
//     setQuarter(4);
//   }
// };
// const downInc = () => {
//   if (downVal < 4) {
//     setDown(downVal + 1);
//   } else {
//     setDown(4);
//   }
// };
// const ballOnInc = () => {
//   if (ballOnYard < 50) {
//     setBallOn(ballOnYard + 1);
//   } else {
//     setBallOn(50);
//   }
// };

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            
            {/* <div className="home__score">32</div> */}
            <div className="home__score">{pointsHome}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
           
            {/* <div className="away__score">32</div> */}
            <div className="away__score">{pointsAway}</div>
          </div>
        </div>
       <BottomRow/>
        </section>

      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
        
          <button
            className="homeButtons__touchdown"
            onClick={() => setPointsHome(pointsHome + 7)}
          >
            Home Touchdown
          </button>
          <button
            className="homeButtons__fieldGoal"
            onClick={() => setPointsHome(pointsHome + 3)}
          >
            Home Field Goal
          </button>
        </div>
        <div className="awayButtons">
          <button
            className="awayButtons__touchdown"
            onClick={() => setPointsAway(pointsAway + 7)}
          >
           Away Touchdown
          </button>
          <button
            className="awayButtons__fieldGoal"
            onClick={() => setPointsAway(pointsAway + 3)}
          >
            Away Field Goal
          </button>
        </div>
        </section>   
    </div>
   )}
//    <div className="scoreBoardControls">
//    <button className="down" onClick={downInc}>
//      Next Down
//    </button>
//    <button
//      className="homeButtons__fieldGoal"
//      onClick={() => setPointsHome(pointsHome + 3)}
//      className="yardsLeft"
//      onClick={() => setYards(yardsTilFirst + 1)}
//    >
//      Home Field Goal
//      To Go +1
//    </button>
//  </div>
//  <div className="awayButtons">
//    <button
//      className="awayButtons__touchdown"
//      onClick={() => setPointsAway(pointsAway + 7)}
//      className="yardsLeft"
//      onClick={() => setYards(yardsTilFirst - 1)}
//    >
//      Away Touchdown
//      To Go -1
//    </button>
//    <button className="ballOn" onClick={ballOnInc}>
//      Ball On
//    </button>
//    <button className="quarter" onClick={quarterInc}>
//      Quarter
//    </button>
//    <button
//      className="awayButtons__fieldGoal"
//      onClick={() => setPointsAway(pointsAway + 3)}
//      className="reset"
//      onClick={() => {
//        setPointsHome(0);
//        setPointsAway(0);
//        setDown(1);
//        setYards(10);
//        setQuarter(1);
//      }}
//    >
//      Away Field Goal
//      Reset
//    </button>
//  </div>
// </section>

  

  export default App;
  