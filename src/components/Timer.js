import React, { useEffect, toggleTimer } from 'react';

let id;
// let paused = true;

const Timer = (useState, toggleTimer) => {
    const seconds = (useState.timer % 60).toString().padStart(2, '0');
    const minutes = Math.floor(useState.timer / 60).toString().padStart(2, '0');

    useEffect(() => {
      id = setInterval(() => {
        useState.setTimer(timer => timer - 1);
      }, 1000);
    }, []);
    if (useState.timer <= 0) {
      toggleTimer();
    

    function stopTimer(){
      clearInterval(id);
    }
    
    function toggleTimer(){
      console.log(useState.pause);
      if(useState.pause){
        useState.pause = false;
        Timer();
      } else {
        useState.pause = true;
        stopTimer();
      }
    }
  }

    return (
      <div>
        <div className="timer">{minutes}:{seconds}</div>
      </div>
    );
  };

  export default Timer;