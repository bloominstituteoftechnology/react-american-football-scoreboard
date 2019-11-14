import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ScoreBoard from "./scoreboard.js"
import Buttons from "./buttons";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
