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
  const [timer, setMyTimer] = useState(1500);
  const [pause, play] = useState(false);
  const [toGo, setToGo] = useState(0);
  const [down, setDown] = useState(0);

  return (
    <div className="container">
      <section className="scoreboard">
        <ScoreBoard homeScore={homeScore} awayScore={awayScore} timer={timer} setMyTimer={setMyTimer}  />
        <BottomRow down={down} setDown={setDown} quarter={quarter} setQuarter={setQuarter} timer={timer} setMyTimer={setMyTimer} toGo={toGo} setToGo={setToGo} />
      </section>
        <Buttons down={down} setDown={setDown} quarter={quarter} homeScore={homeScore} awayScore={awayScore} setHome={setHome} setAway={setAway} setQuarter={setQuarter} timer={timer} setMyTimer={setMyTimer} toGo={toGo} setToGo={setToGo}/>
        <Timer timer={timer} setMyTimer={setMyTimer} pause={pause} play={play}/>
    </div>
  );
}

export default App;
