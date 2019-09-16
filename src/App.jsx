import React, { useState } from 'react';

import Scoreboard from './components/Scoreboard/Scoreboard';
import Buttons from './components/Buttons/Buttons';

import './App.css';


function App() {
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  return (
    <div className="container">
      <Scoreboard homeScore={homeScore} awayScore={awayScore} />
      <Buttons
        homeScore={homeScore}
        setHomeScore={setHomeScore}
        awayScore={awayScore}
        setAwayScore={setAwayScore}
      />
    </div>
  );
}

export default App;
