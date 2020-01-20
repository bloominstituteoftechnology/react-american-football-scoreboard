import React from 'react';

export default function AwayButtons(props){

    return (

        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={props.addAwayTD}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={props.addAwayFG}>Away Field Goal</button>
        </div>

    )
}