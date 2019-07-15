import React from "react";
import "./App.css";



const BottomRow = () => {
  return (
    <div className="bottomRow">
      <div className="homePenalty">
        <h3 className="homePenalty__title">Penalties</h3>
        <div className="homePenalty__value gryffindor">3</div>
      </div>
      <div className="homeReplacement">
        <h3 className="homeReplacement__title">Replacements</h3>
        <div className="homeReplacement__value gryffindor">7</div>
      </div>
      <div className="awayPenalty">
        <h3 className="awayPenalty__title">Penalties</h3>
        <div className="awayPenalty__value slytherin">21</div>
      </div>
      <div className="awayReplacement">
        <h3 className="awayReplacement__title">Replacements</h3>
        <div className="awayReplacement__value slytherin">4</div>
      </div>
    </div>
  );
};


export default BottomRow;
