import React, {useState} from "react";
import "./App.css";

const BottomRow = () => {
  const [currentQuarter, setQuarter] = useState(1);
  
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">3</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{currentQuarter}</div>
        <button className="increaseQuarter" onClick = {() => setQuarter(currentQuarter + 1)}> Increase Quarter</button>
      </div>
    </div>


// <section className="buttons">
//   <div className="awayButtons">
//     <button className="increaseQuarter" onClick = {() => setQuarter(currentQuarter + 1)}> Increase Quarter</button>
//   </div>
// </section>
  );
};
export default BottomRow;




