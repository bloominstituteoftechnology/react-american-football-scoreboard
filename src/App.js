
import React, {useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import HomeScore from './components/HomeScore';
import AwayScore from './components/AwayScore';
import TopRow from './components/TopRow';
import QuarterButton from './components/QuarterButton';


function App() {

  const [homeScore, setHomeScore] = useState(32);
  const [awayScore, setAwayScore] = useState(3);
  const [quarter, setQuarter] =useState(1);

  const homeScorer = () =>{
    setHomeScore(homeScore + 7)
  }

  const awayScorer = () =>{
    setAwayScore(awayScore + 7);
  }

  const fieldGo = () => {
       setAwayScore(awayScore + 3);
  }

  const fieldGoaler = () => {
    setHomeScore(homeScore + 3);
}

const gameQuarter = ()=>{
  if(quarter <= 3){
    setQuarter(quarter + 1)
  }
  else{
    setQuarter(quarter * 0)
  }
}

  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow home={homeScore} away={awayScore} name="Tigers"/>
        <BottomRow quart={quarter} />
      </section>
      <section className="buttons">
        <HomeScore touchDown={homeScorer} fieldGoal={fieldGoaler}/>
        <AwayScore awayTouchDown={awayScorer} Goal={fieldGo}/>
        <QuarterButton quarty={gameQuarter}/>
      </section>
    </div>
  );
}

export default App;
