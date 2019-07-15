import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import Buttons from "./Buttons";


const Scoreboard = () => {
    const [homeScore,setHomeScore] = useState(0);
    const [awayScore,setAwayScore] = useState(0);
  
    return(
        <div>
          <section className="scoreboard">
          <div className="topRow">
            <div className="home">
              <h2 className="home__name">Gryffindor</h2>
    
              {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
    
              <div className="home__score">{homeScore}</div>
            </div>
            <div className="timer">00:03</div>
            <div className="away">
              <h2 className="away__name">Slytherin</h2>
              <div className="away__score">{awayScore}</div>
            </div>
          </div>
          <BottomRow />
          
      </section>
        <Buttons homeScore = {homeScore} awayScore = {awayScore} setAwayScore = {setAwayScore} setHomeScore = {setHomeScore} />
        </div>
    )
  }

export default Scoreboard