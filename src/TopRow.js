import React from "react";
import "./App.css";


const TopRow = (props) => {

  return (
    <div className="topRow"> 
    <div className="home">
      <h2 className="home__name">Lions</h2>
      <div className="home__score"> {props.scoreLions} </div>
    
    </div>
    <div className="timer">00:03</div>
    <div className="away">
      <h2 className="away__name">Tigers</h2>
      <div className="away__score"> {props.scoreTigers} </div>
    </div>
  </div>
  );
};

export default TopRow;
