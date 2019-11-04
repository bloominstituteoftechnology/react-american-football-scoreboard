import React, { useState } from "react";
import "./App.css";

// import Down from "./Down";
import Quarter from "./Quarter";

export const AppContext = React.createContext();

const BottomRow = () => {

  const [curDown, setCurDown] = useState(1)
  const [ballToGo, setBallToGo] = useState(10);
  const [ballLocation, setBallLocation] = useState(25);
  const [ballDirection, setBallDirection] = useState('home')
  const [lastPlay, setLastPlay] = useState('');

  function moveTheSticks() {
    let yardage = Math.floor(Math.random() * 10);

    
    if(curDown <= 3 && yardage > ballToGo){
      setCurDown(curDown + 1)
    }
    if(yardage > 0){
      setLastPlay(`${yardage} yard gain!`);
    }else if(yardage === 0){
      setLastPlay(`No gain!`);
    }else{
      setLastPlay(`${yardage} yard loss!`);
    }
    
    if(curDown === 4 && yardage < ballToGo){
      return setLastPlay(`TURNOVER ON DOWNS`)
    }

    setBallToGo(ballToGo - yardage);
    
    if(yardage > ballToGo && yardage !== 0) {
      setCurDown(1);
      setBallToGo(10)
      setLastPlay(`1st down! ${lastPlay}`);
    }else{
      setCurDown(curDown + 1);
    }

    if(ballDirection === 'home' && (ballLocation + yardage) < 50){
      setBallLocation(ballLocation+yardage)
    }else if(ballDirection === 'home'){
      setBallLocation(50-((ballLocation+yardage)-ballLocation))
      setBallDirection('away')
    }else if(ballDirection === 'away'){
      setBallLocation(ballLocation-yardage);
    }
  }

  return (
    <>
      <div className="bottomRow">
        {/* <Down /> */}
        <div className="down" onClick={() => moveTheSticks()}>
            <h3 className="down__title">Down</h3>
            <div className="down__value">{curDown}</div>
        </div>
        <div className="toGo">
          <h3 className="toGo__title">To Go</h3>
          <div className="toGo__value" onClick={() => moveTheSticks()}>{ballToGo}</div>
        </div>
        <div className="ballOn">
          <h3 className="ballOn__title">Ball on</h3>
          <div className="ballOn__value">{ballLocation}</div>
        </div>
        <Quarter />
      </div>
      <div className="lastPlay">{lastPlay}</div>
    </>
  );
};

export default BottomRow;
