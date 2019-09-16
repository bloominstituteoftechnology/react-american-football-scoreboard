import React from 'react';
import './TopRow.css';

const TopRow = () => (
  <div className="TopRow">
    <div className="TopRow-home">
      <h2 className="TopRow-home--name">Lions</h2>

      <div className="TopRow-home--score">1</div>
    </div>
    <div className="TopRow-timer">00:03</div>
    <div className="TopRow-away">
      <h2 className="TopRow-away--name">Tigers</h2>
      <div className="TopRow-away--score">2</div>
    </div>
  </div>
);

export default TopRow;
