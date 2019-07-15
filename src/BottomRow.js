import React from "react";
import "./App.css";

const BottomRow = () => {
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Penalties</h3>
        <div className="down__value gryffindor">3</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">Replacements</h3>
        <div className="toGo__value gryffindor">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Penalties</h3>
        <div className="ballOn__value slytherin">21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Replacements</h3>
        <div className="quarter__value slytherin">4</div>
      </div>
    </div>
  );
};

export default BottomRow;
