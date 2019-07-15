import React, {useState} from "react";
import "./App.css";


const Buttons = () => {
    const [homeScore,setHomeScore] = useState(0);
    const [awayScore,setAwayScore] = useState(0);

    return(
        <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => setHomeScore(homeScore + 10)}>Gryffindor Scores!</button>
          <button className="homeButtons__fieldGoal" onClick={() => setHomeScore(homeScore + 150)}>Gryffindor Catches the Snitch!</button>
        </div>
        <div className="awayButtons">
        <button className="awayButtons__touchdown" onClick={() => setAwayScore(awayScore + 10)}>Slytherin Scores!</button>
          <button className="awayButtons__fieldGoal" onClick={() => setAwayScore(awayScore + 150)}>Slytherin Catches the Snitch!</button>
        </div>
      </section>
     
    )
}

export default Buttons