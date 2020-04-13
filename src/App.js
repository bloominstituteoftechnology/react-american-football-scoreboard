//TODO: STEP 1 - Import the useState hook.
import React, { useState } from 'react';
import './App.css';
import BottomRow from './BottomRow';

function App() {
    //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
    let [homeScore, setHomeScore] = useState(0);
    let [awayScore, setAwayScore] = useState(0);
    let [timer, setTimer] = useState('00:00');

    const addScore = (team, score) => {
        team === 'home'
            ? setHomeScore(homeScore + score)
            : setAwayScore(awayScore + score);
    };
    const subScore = (team, score) => {
        if (team === 'home') {
            homeScore < score
                ? setHomeScore(0)
                : setHomeScore(homeScore - score);
        } else {
            awayScore < score
                ? setAwayScore(0)
                : setAwayScore(awayScore - score);
        }
    };

    return (
        <div className='container'>
            <section className='scoreboard'>
                <div className='topRow'>
                    <div className='home'>
                        <h2 className='home__name'>Lions</h2>

                        {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

                        <div className='home__score'>{homeScore}</div>
                    </div>
                    <div className='timer'>{timer}</div>
                    <div className='away'>
                        <h2 className='away__name'>Tigers</h2>
                        <div className='away__score'>{awayScore}</div>
                    </div>
                </div>
                <BottomRow />
            </section>
            <section className='buttons'>
                <div className='homeButtons'>
                    <h3>Home Touchdown</h3>
                    {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
                    <button
                        onClick={() => addScore('home', 6)}
                        className='homeButtons__touchdown'>
                        +
                    </button>
                    <button
                        onClick={() => subScore('home', 6)}
                        className='homeButtons__touchdown'>
                        -
                    </button>
                    <h3>Home Extra Point (+1)</h3>
                    <button
                        onClick={() => addScore('home', 1)}
                        className='homeButtons__fieldGoal'>
                        +
                    </button>
                    <button
                        onClick={() => subScore('home', 1)}
                        className='homeButtons__touchdown'>
                        -
                    </button>
                </div>
                <div>
                    <button 
                        onClick={() => {
                            setTimer('00:00')
                            setHomeScore(0)
                            setAwayScore(0)}}>
                        Reset All
                    </button>
                </div>
                <div className='awayButtons'>
                    <h3>Away Touchdown</h3>
                    <button onClick={() => addScore('away', 6)} className='awayButtons__touchdown'>
                        +
                    </button>
                    <button onClick={() => subScore('away', 6)} className='awayButtons__touchdown'>
                        -
                    </button>
                    <h3>Away Extra Point (+1)</h3>
                    <button onClick={() => addScore('away', 1)} className='awayButtons__fieldGoal'>
                        +
                    </button>
                    <button onClick={() => subScore('away', 1)} className='awayButtons__fieldGoal'>
                        -
                    </button>
                </div>
            </section>
        </div>
    );
}

export default App;
