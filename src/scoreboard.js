import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

const Scoreboard = () => {
    const [homeScore] = useState(0);
    const [awayScore] = useState(0);

    return(
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
    )
}

export default Scoreboard