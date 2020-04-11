import React from "react";
import { useState } from "react";
import '../../../App.css';

const AwayFieldGoal = () => {

    const [awayScore, newAwayScore] = useState(0);

    return (
        <button className="awayButtons__fieldGoal" onClick={() => newAwayScore(awayScore + 3)}>Away Field Goal</button>
    );
};

export default AwayFieldGoal;