//TODO: STEP 1 - Import the useState hook.
import React, { useState } from 'react';
import './App.css';
import BottomRow from './BottomRow';

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const initialState = 0;
  const [lionsTeam, setLionsTeam] = useState(initialState);
  const [tigersTeam, setTigersTeam] = useState(initialState);
  return (
    <div className='container'>
      <section className='scoreboard'>
        <div className='topRow'>
          <div className='home'>
            <h2 className='home__name'>Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className='home__score'>{lionsTeam}</div>
          </div>
          <div className='timer'>00:03</div>
          <div className='away'>
            <h2 className='away__name'>Tigers</h2>
            <div className='away__score'>{tigersTeam}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className='buttons'>
        <div className='homeButtons'>
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button
            className='homeButtons__touchdown'
            onClick={() => setLionsTeam(lionsTeam + 6)}>
            Home Touchdown
          </button>
          <button
            onClick={() => setLionsTeam(lionsTeam + 3)}
            className='homeButtons__fieldGoal'>
            Home Field Goal
          </button>
          <button
            className='homeButtons_extraPoint'
            onClick={() => setLionsTeam(lionsTeam + 1)}>
            Home Extra Point
          </button>
          <button
            className='homeButtons_twoPoints'
            onClick={() => setLionsTeam(lionsTeam + 2)}>
            Home Two Points
          </button>
        </div>
        <div className='awayButtons'>
          <button
            onClick={() => setTigersTeam(tigersTeam + 6)}
            className='awayButtons__touchdown'>
            Away Touchdown
          </button>
          <button
            onClick={() => setTigersTeam(tigersTeam + 3)}
            className='awayButtons__fieldGoal'>
            Away Field Goal
          </button>
          <button
            className='homeButtons_extraPoint'
            onClick={() => setTigersTeam(tigersTeam + 1)}>
            Away Extra Point
          </button>
          <button
            className='homeButtons_twoPoints'
            onClick={() => setTigersTeam(tigersTeam + 2)}>
            Away Two Points
          </button>
        </div>
        <button
          className='homeButtons_extraPoint'
          onClick={() => setLionsTeam(initialState)}>
          Home Reset
        </button>
        <button
          className='homeButtons_twoPoints'
          onClick={() => setTigersTeam(initialState)}>
          Away Reset
        </button>
      </section>
    </div>
  );
}

export default App;
