import React, {useState} from "react";
import "./App.css";
import { booleanLiteralTypeAnnotation } from "@babel/types";

const BottomRow = () => {
  const [downCount, setDownCount] = useState(0);


  const [toGo, setToGo] = useState(10);
  const [ballOn, setBallOn] = useState(120);
  const [quarterCount, setQuarterCount] = useState(0);
  
  
  

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div>
          <button onClick = {() => setDownCount(downCount + 1)}>+</button>
          <button onClick = {() => setDownCount(downCount - 1)}>-</button>
        </div>
        <div className="down__value">{downCount}</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div>
          <button onClick = {() => setToGo(toGo + 1)}>+</button>
          <button onClick = {() => setToGo(toGo - 1)}>-</button>
        </div>
        <div className="toGo__value">{toGo}</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div>
          <button onClick = {() => setBallOn(ballOn + 1)}>+</button>
          <button onClick = {() => setBallOn(ballOn - 1)}>-</button>
        </div>
        <div className="ballOn__value">{ballOn}</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div>
          <button onClick = {() => setQuarterCount(quarterCount + 1)}>+</button>
          <button onClick = {() => setQuarterCount(quarterCount - 1)}>-</button>
        </div>
        <div className="quarter__value">{quarterCount}</div>
      </div>
    {/* //buttons  */}
    
    
    </div>
  );
};

export default BottomRow;
