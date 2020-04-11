import React from "react";
import { useState } from "react";
import '../../../App.css';

const AwayFieldGoal = (props) => {

    return (
        <button className="awayButtons__fieldGoal" onClick={props.fieldGoal}>Away Field Goal</button>
    );
};

export default AwayFieldGoal;