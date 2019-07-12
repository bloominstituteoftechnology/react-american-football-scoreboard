import React, { useState } from "react";
import "./App.css";
import TopRow from "./components/TopRow";
import BottomRow from "./components/BottomRow";
import Buttons from "./components/Buttons";

function App() {
  let [homeScore, updateHomeScore] = useState(0);
  let [awayScore, updateAwayScore] = useState(0);

  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow homeScore={homeScore} awayScore={awayScore} />
        <BottomRow />
      </section>
      <Buttons
        homeScore={homeScore}
        awayScore={awayScore}
        updateAwayScore={updateAwayScore}
        updateHomeScore={updateHomeScore}
      />
    </div>
  );
}

export default App;
