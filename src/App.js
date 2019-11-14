//TODO: STEP 1 - Import the useState hook.
import React, { useState }  from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import Timer from "./Timer.js"
// import Timer from "./Timer.js"
//Broke down the App component into 2 smaller compnents: ScoreBoard and Buttons.
// When I import them into App component they render but the buttons are not updating the score on the score board.
// import {ScoreBoard} from "./scoreboard.js"
// import {Buttons} from "./buttons";

function App() {
  const [home, setHome] = useState(0);
  const [away, setAway] = useState(0);

  return (
    <div className="container">
      <section className="scoreboard">
      <div className="topRow">
        <div className="home">
          <h2 className="home__name">Lions</h2>
          <div className="home__score">{home}</div>
        </div>
        <div className="timer">
          <Timer/>
          </div>
        <div className="away">
          <h2 className="away__name">Tigers</h2>
          <div className="away__score">{away}</div>
        </div>
      </div> 
      {/* <ScoreBoard
      home={home}
      away={away}/> */}
        <BottomRow />
      </section>
      <section className="buttons">
        {/* <Buttons
        home={home}
        away={away}
       
        /> */}
      <div className="homeButtons">
            <button 
                className="homeButtons__touchdown"
                onClick={() => {
                setHome(home + 6);
                console.log("here", home)
                }}>
                    Home Touchdown
            </button>

            <button 
                className="homeButtons__fieldGoal"
                onClick={() => {
                setHome(home + 3);
                }}>
                    Home Field Goal
            </button>

            <button
                className= "homeButtons__extaPoint"
                onClick={() => {
                setHome(home + 1);
                }}>
                    Home Extra Point
            </button>
        </div>

         <div className="awayButtons"> 
             <button 
                className="awayButtons__touchdown"
                onClick={() => {
                setAway(away + 6);
                }}>
                    Away Touchdown
            </button>
            <button 
                className="awayButtons__fieldGoal"
                onClick={() => {
                setAway(away + 3);
                }}>
                    Away Field Goal
            </button>

            <button 
                className= "awayButtons__extaPoint"
                onClick={() => {
                setAway(away + 1);
                }}>
                    Away Extra Point
            </button>
            <button 
                className= "reset"
                onClick={() => {
                setAway(0);
                setHome(0);
                }}>
                    Reset Game
            </button>
            
        </div>
      </section>
    </div>
  );
}

export default App;
