import React from "react";
import "./App.css";

export const Buttons = (props) => {
  
    return( 
        <div>
        <div className="homeButtons">
            <button 
                className="homeButtons__touchdown"
                onClick={()=>{
                     props.setHomeBtn(props.homeBtn + 6)
                }}>
                    Home Touchdown
            </button>

            <button 
                className="homeButtons__fieldGoal"
                onClick={() => 
                props.setHomeBtn(props.homeBtn + 3)}>
                    Home Field Goal
            </button>

            <button
                className= "homeButtons__extaPoint"
                onClick={() => 
                    props.setHomeBtn(props.homeBtn + 1)}>
                    Home Extra Point
            </button>
        </div>

         <div className="awayButtons">
             <button 
                className="awayButtons__touchdown"
                onClick={() => 
                    props.setAwayBtn(props.awayBtn + 6)}>
                    Away Touchdown
            </button>
            <button 
                className="awayButtons__fieldGoal"
                onClick={() => 
                    props.setAwayBtn(props.awayBtn + 3)}>
                    Away Field Goal
            </button>

            <button 
                className= "awayButtons__extaPoint"
                onClick={() =>
                    props.setAwayBtn(props.awayBtn + 1)}>
                    Away Extra Point
            </button>
            <button 
                className= "reset"
                onClick={() => {
                    props.setHomeBtn(0);
                    props.setAwayBtn(0);
                }}>
                    Reset Game
            </button>
        </div>
    </div>
      )
 };
 