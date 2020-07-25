//TODO: STEP 1 - Import the useState hook.
import React, {useState, useEffect} from "react";
import BottomRow from "./BottomRow";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
const [homeTeam, setHomeScore] = useState(0);
const [awayTeam, setAwayScore] = useState(0);
const [secondsTens,setSecondsTens] = useState(9);
const [secondsOnes,setSecondsOnes] = useState(5);
const [minutes,setMinutes] = useState(59);
//second tens

useEffect(() => {
	const interval = secondsTens > -1 && setInterval(() => {
		setSecondsTens(setSecondsTens => secondsTens -1)
		}, 1000);
		if(secondsTens === -1){
			setSecondsTens(9);
			setSecondsOnes(secondsOnes - 1);
			if(secondsOnes === -1){
			setSecondsOnes(5);
			setMinutes(minutes -1);
			if(minutes === 0){
				setMinutes(59);
			}
			}
			}
		return () => clearInterval(interval);
	}, [secondsTens]);

//second ones 
/*
useEffect(() => {
	const interval = secondsOnes > -1 && setInterval(() => {
		setSecondsOnes(setSecondsOnes => secondsOnes -1)
		}, 10000);
		if(secondsOnes === -1){
			setSecondsOnes(5);
			setSecondsTens(secondsTens - 1)
		if(secondsTens === -1){
			setMinutes(minutes - 1)
				if(minutes === 0 ){
					setMinutes(59);
				}
			}
		}
		return () => clearInterval(interval);
	}, [secondsOnes]);
	*/
//minutes
/*
useEffect(() => {
	const interval = minutes > -1 && setInterval(() => {
		setMinutes(setMinutes => minutes -1)
		}, 60000);
		if(minutes === -1){
			setMinutes(59);
		}
		return () => clearInterval(interval);
	}, [minutes]);
	*/
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>
	
            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{homeTeam}</div>
          </div>
          <div className="timer">{minutes}:{secondsOnes}{secondsTens}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayTeam}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick = {() => setHomeScore(homeTeam+7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick = {() => setHomeScore(homeTeam+3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick = {() => setAwayScore(awayTeam + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick = {() => setAwayScore(awayTeam + 6)}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
