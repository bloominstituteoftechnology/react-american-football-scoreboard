//TODO: STEP 1 - Import the useState hook.
import React, { useState } from 'react';

// import React from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import ScoreBoard from "./components/Scoreboard";
import Buttons from "./components/Buttons";

// import scoreboard from "./components/scoreboard";

function App() {
  const [homeScore, setHome] = useState(0);
  const [awayScore, setAway] = useState(0);
  const [quarter, setQuarter] = useState(0);
  // useState.homeScore = 0;
  // awayScore = 0;

  return (
    <div className="container">
      <section className="scoreboard">
        <ScoreBoard homeScore={homeScore} awayScore={awayScore} />
        <BottomRow quarter={quarter} setQuarter={setQuarter}/>
      </section>
        <Buttons quarter={quarter} homeScore={homeScore} awayScore={awayScore} setHome={setHome} setAway={setAway} setQuarter={setQuarter} />
    </div>
  );
}

export default App;
