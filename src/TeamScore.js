//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";

function TeamScore({ score, team, teamName }) {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.
  //  You'll need one for the home score and another for the away score.

  return (
    <div className={team}>
        <h2 className={`${team}__name`}>{teamName}</h2>
        <div className={`${team}__score`}>{score}</div>
    </div>

  );
}

export default TeamScore;
