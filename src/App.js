//TODO: STEP 1 - Import the useState hook.
import React, { useState } from 'react';

import "./App.css";
import BottomRow from "./BottomRow";
import ScoreBoard from "./components/Scoreboard";
import Buttons from "./components/Buttons";
import Timer from "./components/Timer";

function App() {
  const [homeScore, setHome] = useState(0);
  const [awayScore, setAway] = useState(0);
  const [quarter, setQuarter] = useState(0);
  const [timer, setTimer] = useState(1500);
  const [pause, play] = useState(true);
  const [toGo, setToGo] = useState(0);

  return (
    <div className="container">
      <section className="scoreboard">
        <ScoreBoard homeScore={homeScore} awayScore={awayScore} timer={timer} setTimer={setTimer}  />
        <BottomRow quarter={quarter} setQuarter={setQuarter} timer={timer} setTimer={setTimer} toGo={toGo} setToGo={setToGo} />
      </section>
        <Buttons quarter={quarter} homeScore={homeScore} awayScore={awayScore} setHome={setHome} setAway={setAway} setQuarter={setQuarter} timer={timer} setTimer={setTimer} toGo={toGo} setToGo={setToGo}/>
        <Timer timer={timer} setTimer={setTimer} pause={pause} play={play}/>
    </div>
  );
}

export default App;
