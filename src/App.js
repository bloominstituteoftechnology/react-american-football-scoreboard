//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score */
  const [homescore, setHomescore] = useState(0);
  const [awayscore, setAwayscore] = useState(0);

  // const [score, setScore] = useState(0);

 /* const [quarter, setQuarter] = useState(0);
  const updateQtr = e => {
    if(quarter < 4){
      quarter = quarter + 1;
    }else{
      quarter = 0;
    }
  }
*/

// const fieldGoal(team){
//   setScore = team.score + 3;
// }

function updateScore(team, points){
  if(team === "home"){
    setHomescore(homescore + points);
  }else if(team === "away"){
    setAwayscore(awayscore + points);
  }
}
  
//   const homeTouchDown = e => {
//      setHomescore(homescore + 7);
//   }  

//   const homeFieldGoal = e => {
//     setHomescore(homescore + 3);
//   }

//   const awayTouchDown = e => {
//     setAwayscore(awayscore + 7);
//  }

//  const awayFieldGoal = e => {
//    setAwayscore(awayscore + 3);
//  }

 

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homescore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayscore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
  {/*<button className="homeButtons__touchdown" onClick={() =>setLionscore(lionscore + 7)}>Home Touchdown</button> */}
        {/*stretch goal */}
          <button className="homeButtons__touchdown" onClick={() => updateScore("home", 7)}>Home Touchdown</button>

          <button className="homeButtons__fieldGoal" onClick={() => updateScore("home", 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => updateScore("away", 7)}>Away Touchdown</button>
        {/*   <button className="awayButtons__fieldGoal" onClick={awayFieldGoal}>Away Field Goal</button>  */}

        <button className="awayButtons__fieldGoal" onClick={() => updateScore("away", 3)}>Away Field Goal</button>
        </div>

        {/* <div ><button>Update Qtr</button></div> */}
   
      </section>
    </div>
  );
}

export default App;
