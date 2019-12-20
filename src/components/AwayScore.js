import React from 'react';

function AwayScore(props) {
  return (
    <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={props.awayTouchDown}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={props.Goal}>Away Field Goal</button>
        </div>
  )
}

export default AwayScore;
