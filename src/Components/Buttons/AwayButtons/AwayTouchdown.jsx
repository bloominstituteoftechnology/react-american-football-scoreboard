import React from "react";
import { useState } from "react";
import '../../../App.css';

const AwayFieldGoal = (props) => {

    function addScore() {
        return props.newAwayScore(props.awayScore + 7);
    };

    return (
        <button className="awayButtons__touchdown" onClick={() => addScore()}>Away Touchdown</button>
    );
};

export default AwayFieldGoal;