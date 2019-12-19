import React, { useState } from 'react';
import './App.css';

const BottomRow = () => {
	const [ quarter, setQuarter ] = useState(1);
	const [ ballPosition, setBallPosition ] = useState(0);
	const [ down, setDown ] = useState(1);
	const [ toGo, setToGo ] = useState(10);

	const nextQuarter = (e) => {
		setQuarter(quarter + 1);
	};

	const ballOn = (e) => {
		setBallPosition(ballPosition + 1);
	};

	const downNum = (e) => {
		setDown(down + 1);
	};

	const yardsToGo = (e) => {
		setToGo(toGo - 1);
	};

	return (
		<div className="bottomRow">
			<div className="down">
				<h3 className="down__title">Down</h3>
				<div className="down__value">{down}</div>
				<button onClick={downNum} className="quarter-btn">
					Add Down
				</button>
			</div>
			<div className="toGo">
				<h3 className="toGo__title">To Go</h3>
				<div className="toGo__value">{toGo}</div>
				<button onClick={yardsToGo} className="quarter-btn">
					Yards
				</button>
			</div>
			<div className="ballOn">
				<h3 className="ballOn__title">Ball on</h3>
				<div className="ballOn__value">{ballPosition}</div>
				<button onClick={ballOn} className="quarter-btn">
					Positioning
				</button>
			</div>
			<div className="quarter">
				<h3 className="quarter__title">Quarter</h3>
				<div className="quarter__value">{quarter}</div>
				<button onClick={nextQuarter} className="quarter-btn">
					Add Quarter
				</button>
			</div>
		</div>
	);
};

export default BottomRow;
