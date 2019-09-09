import React, { useState } from 'react';
import './App.css';

function App() {
	const [ down, setDown ] = useState(1);
	const [ toGo, setToGo ] = useState(10);
	const [ ballOn, setBallOn ] = useState(22);

	var min = 20,
		max = 50;
	var rand = Math.floor(Math.random() * (max - min + 1) + min);
	var min1 = 1,
		max1 = 50;
	var rand1 = Math.floor(Math.random() * (max1 - min1 + 1) + min1);
	setTimeout(() => {
		setBallOn(rand1);
		if (down === 4) {
			setDown(1);
		} else {
			setDown(down + 1);
		}
		if (down === 1) {
			setToGo(10);
		} else {
			setToGo(rand);
		}
	}, rand * 1000);

	return (
		<div className="bottomRow">
			<div className="down">
				<h3 className="down__title">Down</h3>
				<div className="down__value">{down}</div>
			</div>
			<div className="toGo">
				<h3 className="toGo__title">To Go</h3>
				<div className="toGo__value">{toGo}</div>
			</div>
			<div className="ballOn">
				<h3 className="ballOn__title">Ball on</h3>
				<div className="ballOn__value">{ballOn}</div>
			</div>
			<div className="quarter">
				<h3 className="quarter__title">Quarter</h3>
				<div className="quarter__value">4</div>
			</div>
		</div>
	);
}

export default App;
