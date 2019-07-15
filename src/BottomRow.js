import React, { useState } from "react";
import "./App.css";

const BottomRow = () => {
  const [quarter, setQuarter] = useState(0);
  const [downs, setDowns] = useState(0);
  const [yard, setYard] = useState(0);
  const [togo, setTogo] = useState(0);

  return (
    <div className="bottomRow">
      <div className="setdowns">
        <button onClick={() => setDowns(1)}>1</button>
        <button onClick={() => setDowns(2)}>2</button>
        <button onClick={() => setDowns(3)}>3</button>
        <button onClick={() => setDowns(4)}>4</button>
      </div>
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{downs}</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{togo}</div>
        <input
          className="input"
          type="text"
          value={togo}
          onchange={e => setTogo(e.target.value)}
        />
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{yard}</div>
        <input
          className="input"
          type="text"
          value={yard}
          onchange={e => setYard(e.target.value)}
        />
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarter}</div>
      </div>

      <div className="setQuarter">
        <button onClick={() => setQuarter(1)}>1</button>
        <button onClick={() => setQuarter(2)}>2</button>
        <button onClick={() => setQuarter(3)}>3</button>
        <button onClick={() => setQuarter(4)}>4</button>
      </div>
    </div>
  );
};

export default BottomRow;
