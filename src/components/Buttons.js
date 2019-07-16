import React from "react";
// import Timer from '../components/Timer';

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
        <div className="awayButtons__quarter">
            {/* <button onClick={() =>  useState.setQuarter(useState.quarter + 1)}  className="awayButtons__quarter">Quarter</button> */}

            <button onClick={() =>   useState.setQuarter(useState.quarter + 1)}  
            className="awayButtons__quarter">
            {useState.quarter === 5 ? useState.setQuarter(useState.quarter === 0) : useState.quarter + 2 }Quarter</button>
            
            





        </div>
        <div className="awayButtons__timerButtons">
            {/* <button onClick={() => useState.setTimer(useState.timer)}>Timer</button> */}
            <button onClick={() => useState.setTimer(!useState.pause)} className="App">
             {useState.pause === false ? useState.play : useState.pause}Timer</button>
        </div>
    </section>
    )
}
export default Buttons;