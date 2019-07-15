import React, { useState } from "react";
import ReactDOM from "react-dom";

function Timer () {

  const [secondsElapsed, setSeconds] = useState(150);

  const getSeconds = function () {
    return (`0${secondsElapsed % 60}`).slice(-2);
  }

  const getMinutes = function () {
    return Math.floor(secondsElapsed / 60);
  }



  const startGame = () => {
    alert('Starting game');
    setInterval(function () {
      setSeconds(secondsElapsed +1)
      console.log(secondsElapsed);
      return secondsElapsed;

    }, 1000)
  };


    return (
      <div className="timer">
        <p className ="timer"> { getMinutes ()}:{ getSeconds () } </p>
        <button type="button" onClick={ () => startGame()}>Start Game</button>
      </div>
    );
  }

export default Timer;
