import React from 'react';


const Scoreboard = (useState) => {

   return (

      <div className="topRow">
        <div className="home">
          <h2 className="home__name">Lions</h2>
          <div className="home__score">{useState.homeScore}</div>
        </div>
        <div className="timer">{useState.timer}</div>
        <div className="away">
          <h2 className="away__name">Tigers</h2>
          <div className="away__score">{useState.awayScore}</div>
        </div>
      </div>
      )
   };

export default Scoreboard;