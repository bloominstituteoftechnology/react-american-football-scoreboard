//TODO: STEP 1 - Import the useState hook.
import React, {useState, useEffect} from "react";
import "./App.css";
import BottomRow from "./BottomRow";


function App() {
//TODO: STEP 2 - Establish your applictaion's state with some useState hooks. You'll need one for the home score and another for the away score.

        const [homeScore, setHomeScore] = useState(0);
        const [awayScore, setAwayScore] = useState(0);
        const [quarter, setQuarter] = useState(1);
        const [isActive, setActive] = useState(false);
        const [time, SetTime] = useState(500);

        const formatTime = () => {
                let minutes = Math.floor(time/60);
                let seconds = time % 60;
                return `${minutes.toString().padStart(2,0)}:${seconds.toString().padStart(2,0)}`
        };

        const touchDownAway = (e) => {
        setAwayScore(awayScore + 7);
        }

        const fieldGoalAway = (e) => {
        setAwayScore(awayScore + 3)
        }

        const touchDownHome = (e) => {
        setHomeScore(awayScore + 7);
        }

        const fieldGoalHome = (e) => {
        setHomeScore(homeScore + 3)
        }

        const reset = (e) => {
                setHomeScore(0);
                setAwayScore(0);
                setQuarter(1);
}

        useEffect(
                () => {
                        let int = null;
                        if (isActive && time > 0) {
                                int = setInterval(() => {
                                          SetTime((time) => time - 1);
                                }, 1000);
                        } else if (!isActive && time !== 0) {
                                clearInterval(int);
                        } else if (time === 0 && quarter <=4) {
                                console.log('stopped here')
                                clearInterval(int);
                                SetTime(500);
                                nextQuarter();
                        } else if ((time === 0 && quarter === 4) || quarter === 'OT' || quarter === 'OT2') {
                                clearInterval(int);
                                nextQuarter()
                                SetTime(500);
                        }
                        return () => clearInterval(int);
        },
);

    const leader = homeScore > awayScore ? `Home Team Wins` : `Away Team Wins`;

    const nextQuarter = (e) => {
            // if the quarter is 4, game is over
            // if quarter less than 4, increment by 1
            // if the scores tied, and quarter is 4, go to OT
            if (homeScore === awayScore && quarter === 4) {
                      setQuarter('OT');
                      setTimeout(500);
            } else if (quarter === 4) {
                    alert(`Game is over and ${leader}`);
                    reset();
                    setTimeout(500);
                    setActive(false);
            } else if (quarter === 'OT') {
                  setQuarter(quarter + '2');
                  setTimeout(500);
            } else if (quarter === 'OT2') {
                    if (homeScore === awayScore) {
                            alert('Game is over in a Tie');
                            reset();
                            setActive(false);
                            setTimeout(500);
                  } else {
                        alert(`The winner is ${leader}`);
                        reset();
                        setActive(false);
                        setTimeout(500);
                  }
            } else
                  setQuarter(quarter + 1);
                  setTimeout(500);
    };

    return (
    <div className="container">

        <section className="scoreboard">
        <h1>Welcome to Lambda Staduim</h1>
                            <div className="topRow">
                                      <div className="home">
                                              <h2 className="home__name">Lions</h2>

                  {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

                                                                            <div className="home__score">{homeScore}</div>
                                      </div>
                                      <div className="timer" onClick = {() => setActive(!isActive)}>{formatTime()}</div>
                                      <div className="away">
                                              <h2 className="away__name">Tigers</h2>
                                              <div className="away__score">{awayScore}</div>
                                      </div>
                            </div>
                            <BottomRow nextQuarter = {nextQuarter} quarter = {quarter} />
                    </section>
                    <h1 class = 'startGame'>{!isActive ? 'Click The Timer To Start The Clock' : ''}</h1>
                    <section className="buttons">
                      <button className = "quarterButton" onClick = {nextQuarter}>Next Quarter</button>
                      <div className="homeButtons">
                {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
                        <button className="homeButtons__touchdown" onClick = {touchDownHome}>Home Touchdown</button>
                        <button className="homeButtons__fieldGoal" onClick = {fieldGoalHome}>Home Field Goal</button>
                      </div>
                      <div className="awayButtons">
                        <button className="awayButtons__touchdown" onClick = {touchDownAway}>Away Touchdown</button>
                        <button className="awayButtons__fieldGoal" onClick = {fieldGoalAway}>Away Field Goal</button>

                        <div class='controlButtons' />
                      </div>
                    </section>

    </div>
  );
}

export default App;


