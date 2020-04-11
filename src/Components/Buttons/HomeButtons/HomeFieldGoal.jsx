import React from "react";
import { useState } from "react";
import '../../../App.css';

const HomeFieldGoal = (props) => {

    function addScore() {
        console.log("Hello");
        return props.newScore(props.score + 3);
    };
    return (
        <button className="homeButtons__fieldGoal" onClick={() => addScore()}>Home Field Goal</button>
    );
};

export default HomeFieldGoal;