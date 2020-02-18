import React from "react";
import "./App.css";


function QuarterButton(props) {


  return (
  
          <button onClick= { () =>props.quarterButton < 4 ? props.setQuarterButton(props.quarterButton + 1) : props.setQuarterButton(1)}>Change Quarter</button>

          )
}

export default QuarterButton;