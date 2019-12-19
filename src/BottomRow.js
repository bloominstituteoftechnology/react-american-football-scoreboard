import React, {useState} from "react";
import "./App.css";

function BottomRow() {
  //////////////////// Down Number ////////////////////
  const [downNumber, setDownNumber] = useState(1);

  const nextDown = (e) => {
    if (downNumber <= 3) {
      setDownNumber(downNumber + 1)
    } else {
      setDownNumber(1)
    }
  }

  //////////////////// Yards To Go ////////////////////
  const [yardsToGo, setYardsToGo] = useState(0);

  const addOneYardToGo = (e) => {
    if (yardsToGo <= 98) {
      setYardsToGo(yardsToGo + 1)
    } else {
      setYardsToGo(0)
    }
  }

  const addFiveYardsToGo = (e) => {
    if (yardsToGo <= 94) {
      setYardsToGo(yardsToGo + 5)
    } else {
      setYardsToGo(0)
    }
  }

  const addTenYardsToGo = (e) => {
    if (yardsToGo <= 89) {
      setYardsToGo(yardsToGo + 10)
    } else {
      setYardsToGo(0)
    }
  }

  const goalIsLessThan10Yards = (e) => {
    setYardsToGo("Goal")
  }

  //////////////////// Yard Line ////////////////////
  const [yardLine, setYardLine] = useState(1);

  const addOneYardLine = (e) => {
    if (yardLine <= 49) {
      setYardLine(yardLine + 1)
    } else {
      setYardLine(1)
    }
  }

  const addFiveYardsLine = (e) => {
    if (yardLine <= 45) {
      setYardLine(yardLine + 5)
    } else {
      setYardLine(1)
    }
  }

  const addTenYardsLine = (e) => {
    if (yardLine <= 40) {
      setYardLine(yardLine + 10)
    } else {
      setYardLine(1)
    }
  }

  //////////////////// Quarter Number ////////////////////
  const [quarterNumber, setQuarterNumber] = useState(1);

  const nextQuarter = (e) => {
    if (quarterNumber <= 3) {
      setQuarterNumber(quarterNumber + 1)
    } else if (quarterNumber === 4) {
      setQuarterNumber("End")
    } else {
      setQuarterNumber(1)
    }
  }

  //////////////////// RETURN ////////////////////
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
        <button className="add_one_yard" onClick={addOneYardToGo}>+1</button>
        <button className="add_five_yards" onClick={addFiveYardsToGo}>+5</button>
        <button className="add_ten_yards" onClick={addTenYardsToGo}>+10</button>
        <button className="goal_less_than_10" onClick={goalIsLessThan10Yards}>"Goal"</button>
        <div className="toGo__value">{yardsToGo}</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        {/* Type In The Yard Line The Ball Is On: <input></input> */}
        <button className="add_one_yard" onClick={addOneYardLine}>+1</button>
        <button className="add_five_yards" onClick={addFiveYardsLine}>+5</button>
        <button className="add_ten_yards" onClick={addTenYardsLine}>+10</button>
        <div className="ballOn__value">{yardLine}</div>
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
