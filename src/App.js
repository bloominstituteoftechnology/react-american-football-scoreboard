//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import BottomRow from "./BottomRow";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and
  // another for the away score.

  var homeScore = useState(32);
  var awayScore = useState(30);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */
              
            }
            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */
          
          
          }
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
if(window.load) {
const homeTouchdown = document.querySelector(".homeButtons__touchdown")
const homeFieldgoal = document.querySelector(".homeButtons__fieldGoal")
const awayTouchdown = document.querySelector(".awayButtons__touchdown")
const awayFieldgoal = document.querySelector(".awayButtons__fieldGoal")

homeTouchdown.addEventListener("click", function() {
  var [homeScore, addTouchdown] = useState(32)
  addTouchdown(homeScore + 3)
})

homeFieldgoal.addEventListenser("click", function() {
  var [homeScore, addFieldgoal] = useState(32)
  addFieldgoal(homeScore + 7)
})

awayTouchdown.addEventListener("click", function() {
  var [awayScore, addAwayTouchdown] = useState(32)
  addAwayTouchdown(awayScore + 3)
})

awayFieldgoal.addEventListener("click", function() {
  var [awayScore, addAwayFieldgoal] = useState(32)
  addAwayFieldgoal(awayScore + 3)
})
}
export default App;
