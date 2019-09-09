import React, { useState } from 'react';
import "./App.css";

const BottomRow = () => {



  const [down, setDown] = useState(1);

  const nextDown = () => {
    setDown(down + 1);
  }

  const [toGo, setToGo] = useState(50);

  const decreaseToGo = () => {
    setToGo(toGo - 1);
  }

  const [ballOn, setBallOn] = useState(50);

  const decreaseBallOn = () => {
    setBallOn(ballOn - 1);
  }

  const [quarter, setQuarter] = useState(1);

  const nextQuarter = () => {
    setQuarter(quarter + 1);
  };

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{down}</div>
        <button onClick={nextDown} className="button">Next Down</button>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{toGo}</div>
        <button onClick={decreaseToGo} className="button">Decrease 1 Yard</button>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{ballOn}</div>
        <button onClick={decreaseBallOn} className="button">Decrease 1 Yard</button>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarter}</div>
        <button onClick={nextQuarter} className="button">Next Quarter</button>
      </div>
    </div>
  );
};

export default BottomRow;
