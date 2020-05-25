import React, {useState, useEffect} from "react";
import "./App.css";
import BottomRow from "./BottomRow";


function App() {
  const number = 0;
  const [homeScore, setHomeScore] = useState(number);
  const [awayScore, setAwayScore] = useState(number);
  const [quarter, setQuarter] = useState(1);
  const [down, setDown] = useState(1);
  const [ballOn, setBallOn] = useState(20);
  const [toGo, setToGO] = useState(10);

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

  function resetToGo() {
    setToGO(10)
  }

  function resetBallOn() {
    setBallOn(20)
  }

  if(quarter >= 5){
    setQuarter(quarter === 1)
  }

  if(down >= 5){
    setDown(down === 1)
  }
  
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h1>HOME TEAM</h1>
            <h2 className="home__name">BattleHawks</h2>
            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">{minutesLeft}:{ secondsLeft < 10 ? `0${ secondsLeft }` : secondsLeft }</div>
          <div className="away">
            <h1>AWAY TEAM</h1>
            <h2 className="away__name">Roughnecks</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow quarter={quarter} down={down} ballOn={ballOn} toGo={toGo} />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          <h1>HOME</h1>
          <button className="homeButtons__touchdown" onClick={() => setHomeScore(homeScore + 6)}>Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => setHomeScore(homeScore + 1)}> Add Point</button>
          <button className="homeButtons__resetScore" onClick={() => setHomeScore(setHomeScore === number)}>Reset Score</button>
        </div>
        <div className="awayButtons">
          <h1>AWAY</h1>
          <button className="awayButtons__touchdown" onClick={() => setAwayScore(awayScore + 6)}>Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => setAwayScore(awayScore + 1)}>Add Point</button>
          <button className="awayButtons__resetScore" onClick={() => setAwayScore(setAwayScore === number)}>Reset Score</button>
        </div>
        <div className='time'>
          <h1>TIME</h1>
          <button className={`toggleStart ${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
          {isActive ? 'Pause Time' : 'Start Time'}
          </button> 
         <button className={'reset'} onClick={reset}>Reset Time</button>
        </div>
        <div className='gameQuarter'>
          <h1>TO GO</h1>
          <button className='gameQTR' onClick={() => setToGO(toGo + 1)}>+1</button>
          <button className='gameQTR' onClick={() => setToGO(toGo - 1)}>-1</button>
          <button className='reset' onClick={resetToGo}>Reset</button>
          
        </div>
        <div className='yardsOn'>
          <h1>BALL ON</h1>
          <div className='yardsplus'>
            <button className='yardsAdd' onClick={() => setBallOn(ballOn + 1)}>+1</button>
            <button className='yardsAdd' onClick={() => setBallOn(ballOn + 5)}>+5</button>
          </div>
          <div className='yardsminus'>
            <button className='yardsSub' onClick={() => setBallOn(ballOn - 1)}>- 1</button>
            <button className='yardsSub' onClick={() => setBallOn(ballOn - 5)}>- 5</button>
          </div>

          <button className='reset' onClick={resetBallOn}>Reset</button>
          
        </div>
        <div className='gameQuarter'>
          <h1>OTHER</h1>
          <button className='gameQTR' onClick={() => setDown(down + 1)}>DOWN</button>
          <button className='gameQTR' onClick={() => setQuarter(quarter + 1)}>Quarter</button>
          
        </div>

      </section>
    </div>
  );
}

export default App;


