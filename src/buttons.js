import React, { useState } from "react";
//import ScoreBoard from "./scoreboard.js"
import "./App.css";

export const Buttons = (props) => {
    const [home, setHome] = useState(0);
    const [away, setAway] = useState(0);

    return( 
        <div>
        <div className="homeButtons">
            <button 
                className="homeButtons__touchdown"
                onClick={()=>{
                     props.setHome(props.home + 6)
                }}>
                    Home Touchdown
            </button>

            <button 
                className="homeButtons__fieldGoal"
                onClick={() => 
                props.setHome(props.home + 3)}>
                    Home Field Goal
            </button>

            <button
                className= "homeButtons__extaPoint"
                onClick={() => 
                    props.setHome(props.home + 1)}>
                    Home Extra Point
            </button>
        </div>

         <div className="awayButtons">
             <button 
                className="awayButtons__touchdown"
                onClick={() => 
                    props.setAway(props.away + 6)}>
                    Away Touchdown
            </button>
            <button 
                className="awayButtons__fieldGoal"
                onClick={() => 
                    props.setAway(props.away + 3)}>
                    Away Field Goal
            </button>

            <button 
                className= "awayButtons__extaPoint"
                onClick={() =>
                    props.setAway(props.away + 1)}>
                    Away Extra Point
            </button>
        </div>
    </div>
      )
 };
 