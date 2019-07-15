import React, {useState} from "react";
import "./App.css";



const Buttons = (props) => {


    return(
        <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__goal" onClick={() => props.setHomeScore(props.homeScore + 10)}>Gryffindor Scores!</button>
          <button className="homeButtons__snitch" onClick={() => props.setHomeScore(props.homeScore + 150)}>Gryffindor Catches the Snitch!</button>
        </div>
        <div className="awayButtons">
        <button className="awayButtons__touchdown" onClick={() => props.setAwayScore(props.awayScore + 10)}>Slytherin Scores!</button>
          <button className="awayButtons__fieldGoal" onClick={() => props.setAwayScore(props.awayScore + 150)}>Slytherin Catches the Snitch!</button>
        </div>
      </section>
     
    )
  }
export default Buttons