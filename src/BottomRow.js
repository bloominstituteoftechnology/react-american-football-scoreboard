import React, {useState} from "react";
import "./App.css";

function BottomRow() {
  const [downNumber, setDownNumber] = useState(1);
  const [quarterNumber, setQuarterNumber] = useState(1);

  const nextDown = (e) => {
    if (downNumber <= 3) {
      setDownNumber(downNumber + 1)
    } else {
      setDownNumber(1)
    }
  }

  const nextQuarter = (e) => {
    if (quarterNumber <= 3) {
      setQuarterNumber(quarterNumber + 1)
    } else if (quarterNumber === 4) {
      setQuarterNumber("End")
    } else {
      setQuarterNumber(1)
    }
  }

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <button className="next_down" onClick={nextDown}>Next Down</button>
        <div className="down__value">{downNumber}</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        {/* Type In Yards To Go: <input></input> */}
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        {/* Type In The Yard Line The Ball Is On: <input></input> */}
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <button className="next_quarter" onClick={nextQuarter}>Next Quarter</button>
        <div className="quarter__value">{quarterNumber}</div>
      </div>
    </div>
  );
};

export default BottomRow;
