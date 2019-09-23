import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  const [homeScore, setHome] = useState(0);
  const [awayScore, setAway] = useState(0);
  const [quarter, setQuarter] = useState(0);
  const [down, setDown] = useState(0)

  function scoreHandler(team, amount) {
    if (team === "Lions") {
      setHome(homeScore + amount);
    } else {
      setAway(awayScore + amount);
    }
  }
  function downHandler(change) {
    if (change === "next" && down < 4) {
      setDown(down + 1);
    } else if (change === "first") {
      setDown(1);
    }
  }
  function quarterHandler() {
    if (quarter < 4) {
      setQuarter(quarter + 1);
    }
  }

    return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>
            <div className="home__score">{ homeScore }</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{ awayScore }</div>
          </div>
        </div>
        <BottomRow quarter={quarter} down={down} />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          <button className="homeButtons__touchdown" onClick={()=>scoreHandler("Lions", 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={()=>scoreHandler("Lions", 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={()=>scoreHandler("Tigers", 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={()=>scoreHandler("Tigers", 3)}>Away Field Goal</button>
        </div>
        <div className="downButtons">
          <button className="downButtons__down-next" onClick={()=>downHandler("next")}>Next Down</button>
          <button className="downButtons__down-first" onClick={()=>downHandler("first")}>First Down</button>
        </div>
        <div className="timerButtons">
          <button className="timerButtons__quarter" onClick={()=>quarterHandler()}>Next Quarter</button>
        </div>
      </section>
    </div>
  );
}
export default App;
