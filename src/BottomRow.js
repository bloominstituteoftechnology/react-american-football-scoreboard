import React, {useState} from "react";
import "./App.css";
import { isUserWhitespacable } from "@babel/types";

const BottomRow = () => {
  let[down, setDown] = useState(1)

  console.log(useState)
  console.log(down)
  console.log(setDown)

  let[distance, setDistance] =useState(10)

   let[spot, setSpot] = useState(25)

    let [quarter, setquarter] = useState(1)

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div button onClick={() => setDown(down + 1)} onMouseOver={() => setDown(1)} className="down__value">{down}</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div button onClick={() => setDistance(distance - 1)} onMouseOver={() => setDistance(distance + 5)}className="toGo__value">{distance}</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div button onClick={() => setSpot(spot +1)} onMouseOver={() => setSpot(spot - 1)} className="ballOn__value">{spot}</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div button onClick={() => setquarter(quarter +1)} onDoubleClick={() => setquarter(1)} className="quarter__value">{quarter}</div>
      </div>
    </div>
  );
};

export default BottomRow;
