import React from "react";

const Buttons = (useState) => {

return (
    <section className="buttons">
        <div className="homeButtons">
            <button onClick={() => useState.setHome(useState.homeScore + 7)} className="homeButtons__touchdown">Home Touchdown</button>
            <button onClick={() => useState.setHome(useState.homeScore + 3)}className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
            <button onClick={() => useState.setAway(useState.awayScore + 7)}  className="awayButtons__touchdown">Away Touchdown</button>
            <button onClick={() => useState.setAway(useState.awayScore + 3)}  className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
        <div className="quarterButtons">
            <button onClick={() => useState.setQuarter(useState.quarter + 1)}  className="awayButtons__quarter">Quarter</button>
        </div>
    </section>
    )
}
export default Buttons;