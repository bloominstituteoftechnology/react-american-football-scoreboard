import React, { useState } from "react";

export default function Home(props) {

  return (
        <div className="homeButtons">
          <button className="homeButtons__fieldGoal" onClick={props.setHome}>Home Field Goal</button>
        </div>
  );
}