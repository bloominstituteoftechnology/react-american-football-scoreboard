import React from "react";
import { useState } from "react";
import '../../../App.css';

const HomeFieldGoal = (props) => {
    
    return (
        <button className="homeButtons__fieldGoal" onClick={props.fieldGoal}>Home Field Goal</button>
    );
};

export default HomeFieldGoal;