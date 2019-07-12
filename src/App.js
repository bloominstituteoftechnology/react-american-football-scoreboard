import React, { useState } from "react";
import "./App.css";
import TopRow from "./components/TopRow";
import BottomRow from "./components/BottomRow";
import Buttons from "./components/Buttons";

function App() {
  let [homeScore, updateHomeScore] = useState(0);
  let [awayScore, updateAwayScore] = useState(0);
  let [homeFoul, updateHomeFoul] = useState(0);
  let [awayFoul, updateAwayFoul] = useState(0);

  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow homeScore={homeScore} awayScore={awayScore} />
        <BottomRow homeFoul={homeFoul} awayFoul={awayFoul} />
      </section>
      <Buttons
        homeScore={homeScore}
        awayScore={awayScore}
        updateAwayScore={updateAwayScore}
        updateHomeScore={updateHomeScore}
        homeFoul={homeFoul}
        awayFoul={awayFoul}
        updateAwayFoul={updateAwayFoul}
        updateHomeFoul={updateHomeFoul}
      />
    </div>
  );
}

export default App;
