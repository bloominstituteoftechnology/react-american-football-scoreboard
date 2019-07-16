//TODO: STEP 1 - Import the useState hook.
import {useState} from "react";
import React from "react";
import "./App.css";
import TopRow from "./TopRow";
import BottomRow from "./BottomRow";
import Buttons from "./Buttons";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [scoreLions, setValueLions] = useState(0);
  const [scoreTigers, setValueTigers] = useState(0);

  return (
    
    <div className="container">
      <section className="scoreboard">

      <TopRow scoreTigers={scoreTigers} scoreLions={scoreLions} />
      <BottomRow />
      </section>
      <Buttons scoreTigers={scoreTigers} scoreLions={scoreLions} setValueLions={setValueLions} setValueLions={setValueLions} />
    </div>
  );
}

export default App;