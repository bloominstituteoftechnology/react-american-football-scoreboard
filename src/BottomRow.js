import React, { useState } from "react";
import "./App.css";

  const BottomRow = () => {
    return (
      <div className="bottomRow">
        <div className="down">
          <h3 className="down__title">Corners</h3>
          <div className="quarter__value">0</div>
        </div>
        <div className="toGo">
          <h3 className="toGo__title">Possesion</h3>
          <div className="toGo__value">46%</div>
        </div>
        <div className="ballOn">
          <h3 className="ballOn__title">Corners</h3>
          <div className="ballOn__value">1</div>
        </div>
        <div className="quarter">
          <h3 className="quarter__title">Possesion</h3>
          <div className="quarter__value">54%</div>
        </div>
      </div>
    );
  };

  export default BottomRow;
