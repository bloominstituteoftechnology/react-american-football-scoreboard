import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function Lions(){
    const [lionPoints, setLionPoints] = useState(0);

    const addHScoreD = e => {
      setLionPoints(lionPoints + 7);
    };
  
    const addHScoreF = e => {
      setLionPoints(lionPoints + 3);
    }

}