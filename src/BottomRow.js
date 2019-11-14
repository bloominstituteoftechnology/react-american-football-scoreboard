import React, {useState} from "react";
import "./App.css";

const BottomRow = () => {
  const [down, setDown] = useState(0);
  const [goValue, setGoValue] = useState(0);
  const [ballOn, setBallOn] = useState(0);
  const [quater, setQuater] = useState(0);

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{down}</div>
          <button 
            className="bottomRowNewButtons"
            onClick = {() => {
              setDown(down + 1)
            }}>
            Add down 
          </button>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
          <div className="toGo__value">{goValue}</div>
        <button 
          className="bottomRowNewButtons"
          onClick = {() =>{
            setGoValue(goValue + 1)
          }}>
          Add to go 
        </button>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
<div className="ballOn__value">{ballOn}</div>
        <button className="bottomRowNewButtons"
        onClick = {() => {
          setBallOn(ballOn + 1)
        }}>
          Add ball on </button>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
      <div className="quarter__value">{quater}</div>
        <button className="bottomRowNewButtons"
        onClick = {() => {
          setQuater(quater + 1)
        }}>
          Change Quarter</button>
      </div>
    </div>
  );
};

export default BottomRow;
