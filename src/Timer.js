import React, { useState } from "react";
import ReactDOM from "react-dom";

function Timer () {

  const startGame = () =>
    alert('starting');

    return (
      <div className="timer">
        <p className ="timer">00:00</p>
        <button type="button" onClick={ () => startGame()}>Start Game</button>
      </div>
    );
  }

export default Timer;
