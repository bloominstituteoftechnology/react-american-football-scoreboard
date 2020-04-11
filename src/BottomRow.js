import React from "react";
import Down from './Components/BottomRow/Down';
import ToGo from './Components/BottomRow/ToGo';
import BallOn from './Components/BottomRow/BallOn';
import "./App.css";
import Quarter from "./Components/BottomRow/Quarter";

const BottomRow = () => {
  return (
    <div className="bottomRow">
      <Down />
      <ToGo />
      <BallOn />
      <Quarter />
    </div>
  );
};

export default BottomRow;
