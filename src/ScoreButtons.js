//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";

function ScoreButton({ addScore, team }) {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.
  //  You'll need one for the home score and another for the away score.

  const capitalizeWord = (word) => {
      return word.replace(word.charAt(0), word.charAt(0).toUpperCase())
  }
  return (
    <div className={`${team}Buttons`}>
        {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
        <button onClick={() => addScore(7, team)} className={`${team}Buttons__touchdown`}>{capitalizeWord(team)} Touchdown</button>
        <button onClick={() => addScore(3, team)} className={`${team}Buttons__fieldGoal`}>{capitalizeWord(team)} Field Goal</button>
    </div>
  );
}

export default ScoreButton;
