import React, { useState } from "react";
import ReactDOM from "react-dom";

function Timer () {

  const [secondsElapsed] = useState(50);
  console.log(secondsElapsed);
  const getSeconds = function () {
    return (`0${secondsElapsed % 60}`).slice(-2);
  }
  console.log(getSeconds);

  const startGame = () =>
    alert('Starting game');

    return (
      <div className="timer">
        <p className ="timer"> { getSeconds() } </p>
        <button type="button" onClick={ () => startGame()}>Start Game</button>
      </div>
    );
  }

export default Timer;
