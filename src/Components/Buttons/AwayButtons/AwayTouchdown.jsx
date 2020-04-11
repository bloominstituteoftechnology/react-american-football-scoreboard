import React from "react";
import { useState } from "react";
import '../../../App.css';

const AwayFieldGoal = () => {

    const [awayScore, newAwayScore] = useState(0);

    return (
        <button className="awayButtons__touchdown" onClick={() => newAwayScore(awayScore + 7)}>Away Touchdown</button>
    );
};

export default AwayFieldGoal;