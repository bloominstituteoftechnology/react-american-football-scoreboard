//TODO: STEP 1 - Import the useState hook.
import React, {useState} from 'react';
// import React from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [HomeScore, setHomeScore] = useState(0);
  const [AwayScore, setAwayScore] = useState(0);

  const touchDownAway = (e) => {
		setAwayScore(AwayScore + 7);
	};

	const fieldGoalAway = (e) => {
		setAwayScore(AwayScore + 3);
	};

	const touchDownHome = (e) => {
		setHomeScore(HomeScore + 7);
	};

	const fieldGoalHome = (e) => {
		setHomeScore(HomeScore + 3);
	};

	// const reset = (e) => {
	// 	setHomeScore(0);
	// 	setAwayScore(0);
	// };

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">49ers</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{HomeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Scrubs</h2>
            <div className="away__score">{AwayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={touchDownHome} className='homeButtons__touchdown'>
					Home Touchdown
				</button>
        <button onClick={fieldGoalHome} className='homeButtons__fieldGoal'>
					Home Field Goal
				</button>
        </div>
        <div className="awayButtons">
        <button onClick={touchDownAway} className='awayButtons__touchdown'>
					Away Touchdown
				</button>
				<button onClick={fieldGoalAway} className='awayButtons__fieldGoal'>
					Away Field Goal
				</button>
        </div>
      </section>
    </div>
  );
}

export default App;
