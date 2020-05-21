import React, {useState, useEffect} from "react";
import "./App.css";
import BottomRow from "./BottomRow";


function App() {
  const number = 0;
  const [homeScore, setHomeScore] = useState(number);
  const [awayScore, setAwayScore] = useState(number);

  const [quarter, setQuarter] = useState(1);

  const [isActive, setIsActive] = useState(false);

  const [minutesLeft, setMinutesLeft] = useState(14);
  const [secondsLeft, setSecondsLeft] = useState(59);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSecondsLeft(secondsLeft => secondsLeft - 1);
      }, 1000);
    } else if (!isActive && secondsLeft !== 0) {
      clearInterval(interval);
    } if (secondsLeft === 0){
      setMinutesLeft(minutesLeft - 1);
      setSecondsLeft(secondsLeft + 59);
    };
    return () => clearInterval(interval);
  }, [isActive, secondsLeft, minutesLeft]);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setMinutesLeft(14)
    setSecondsLeft(59);
    setIsActive(false);
  }

  if(quarter >= 5){
    setQuarter(quarter === 1)
  }
  
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">BattleHawks</h2>
            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">{minutesLeft}:{ secondsLeft < 10 ? `0${ secondsLeft }` : secondsLeft }</div>
          <div className="away">
            <h2 className="away__name">Roughnecks</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow quarter={quarter} setQuarter={setQuarter} />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          <button className="homeButtons__touchdown" onClick={() => setHomeScore(homeScore + 6)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => setHomeScore(homeScore + 3)}> Add Point</button>
          <button className="homeButtons__resetScore" onClick={() => setAwayScore(setAwayScore === number)}>Reset Score</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => setAwayScore(awayScore + 6)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => setAwayScore(awayScore + 1)}>Add Point</button>
          <button className="awayButtons__resetScore" onClick={() => setAwayScore(setAwayScore === number)}>Reset Score</button>
        </div>
        <div className='gameQuarter'>
          <button className='gameQTR' onClick={() => setQuarter(quarter + 1)}>Quarter</button>
          <button className={`toggleStart ${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
          {isActive ? 'Pause Time' : 'Start Time'}
          </button> 
         <button className={'reset'} onClick={reset}>Reset Time</button>
       </div>
      </section>
    </div>
  );
}

export default App;


