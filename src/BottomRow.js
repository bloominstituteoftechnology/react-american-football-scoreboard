import React from "react";
import "./App.css";
import { useState, useEffect } from "react";

const BottomRow = () => {
  const [quarter, nextQuarter] = useState(2);
  const [down, downChange] = useState(1);

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{down}</div>
        <button className="nextDown" onClick={() => downChange(down + 1)}>
          Next Down
        </button>
        <button className="downBack" onClick={() => downChange(down - 1)}>
          Reset
        </button>
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
        <div className="quarter__value">{quarter}</div>
        <button
          className="quarterState"
          onClick={() => nextQuarter(quarter + 1)}
        >
          Next Quarter
        </button>
        <button
          className="quarterBack"
          onClick={() => nextQuarter(quarter - 1)}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default BottomRow;
