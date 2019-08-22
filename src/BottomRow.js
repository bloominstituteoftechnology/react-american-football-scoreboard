import React, {useState} from "react";
import "./App.css";
import './Timer'


const BottomRow = () => {
  const [gameQuarter, setGameQuarter] = useState(0);
  const changeQuarter = e => {
    setGameQuarter(gameQuarter + 1)
  }
  if(gameQuarter == 5){
    setGameQuarter(gameQuarter == gameQuarter+1)
  }
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">3</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div onClick = {changeQuarter} className="quarter__value">{gameQuarter}</div>
      </div>
    </div>
  );
};

export default BottomRow;
