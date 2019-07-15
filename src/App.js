//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import Scoreboard from "./scoreboard";






function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score. ---these were moved to the appropriate files; commented out for reference.
  // const [homeScore, setHomeScore] = useState(0);
  // const [awayScore, setAwayScore] = useState(0);
  return (
    <div className="container">
      
        <Scoreboard />
     
    </div>
  );
}





export default App;
