import React, { useState } from "react";
import Timer from "./Timer.js"
//import Buttons from "./buttons";

import "./App.css";

export const ScoreBoard = (props) =>{
    // const [home, setHome] = useState(0);
    // const [away, setAway] = useState(0);
  // console.log("home",setHome);
  //  console.log(this);
    return(
        <div className="topRow">
        <div className="home">
          <h2 className="home__name">Lions</h2>
          <div className="home__score">{props.home}</div>
        </div>
        <div className="timer">
          <Timer/>
          </div>
        <div className="away">
          <h2 className="away__name">Tigers</h2>
          <div className="away__score">{props.away}</div>
        </div>
      </div> 
      
    )
};