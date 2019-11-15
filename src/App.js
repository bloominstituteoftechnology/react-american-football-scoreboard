import React, { useState }  from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import {ScoreBoard} from "./scoreboard.js"
import {Buttons} from "./buttons";

function App() {
  const [home, setHome] = useState(0);
  const [away, setAway] = useState(0);

  return (
    <div className="container">
      <section className="scoreboard">
     
      <ScoreBoard
      homeScore={home}
      awayScore={away}/>
        <BottomRow />
      </section>
      <section className="buttons">
        <Buttons
        homeBtn={home}
        awayBtn={away}
       setHomeBtn={setHome}
       setAwayBtn={setAway}
        />
      </section>
    </div>
  );
}

export default App;
