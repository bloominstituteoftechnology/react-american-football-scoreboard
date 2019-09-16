import React from 'react';

import './BottomRow.css';


const BottomRow = () => (
  <div className="BottomRow">
    <div className="BottomRow-down">
      <h3 className="BottomRow-down--title">Down</h3>
      <div className="BottomRow-down--value">3</div>
    </div>
    <div className="BottomRow-toGo">
      <h3 className="BottomRow-toGo--title">To Go</h3>
      <div className="BottomRow-toGo--value">7</div>
    </div>
    <div className="BottomRow-ballOn">
      <h3 className="BottomRow-ballOn--title">Ball on</h3>
      <div className="BottomRow-ballOn--value">21</div>
    </div>
    <div className="BottomRow-quarter">
      <h3 className="BottomRow-quarter--title">Quarter</h3>
      <div className="BottomRow-quarter--value">4</div>
    </div>
  </div>
);

export default BottomRow;
