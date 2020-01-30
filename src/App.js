//TODO: STEP 1 - Import the useState hook.
import React, { useState } from 'react';
import './App.css';
import BottomRow from './BottomRow';

function App() {
	//TODO: STEP 2 - Establish your application's state with some useState hooks.  You'll need one for the home score and another for the away score.
	const [ home, setHome ] = useState(21);
	const [ away, setAway ] = useState(14);

	return (
		<div className='container'>
			<section className='scoreboard'>
				<div className='topRow'>
					<div className='home'>
						<h2 className='home__name'>Bears</h2>

						{/* TODO STEP 3 - We need to change the hard-coded values in these divs to accept dynamic values from our state. */}

						<div className='home__score'>{home}</div>
					</div>
					<div className='timer'>03:01</div>
					<div className='away'>
						<h2 className='away__name'>Packers</h2>
						<div className='away__score'>{away}</div>
					</div>
				</div>
				<BottomRow />
			</section>
			<section className='buttons'>
				<div className='homeButtons'>
					{/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
					<button onClick={() => setHome(home + 7)} className='homeButtons__touchdown'>
						Humpty Dance
					</button>
					<button onClick={() => setHome(home + 3)} className='homeButtons__fieldGoal'>
						Hammer Time
					</button>
				</div>
				<div className='awayButtons'>
					<button onClick={() => setAway(away + 7)} className='awayButtons__touchdown'>
						Same Old Song
					</button>
					<button onClick={() => setAway(away + 3)} className='awayButtons__fieldGoal'>
						Wait, What?
					</button>
				</div>
			</section>
		</div>
	);
}

export default App;