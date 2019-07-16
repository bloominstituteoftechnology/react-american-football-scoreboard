import React from "react";


function Buttons (props) {

    const {lions, lionsScore, tigers, tigersScore} = props;
    return (

        <section className="buttons">

            <div className="homeButtons">
            {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
            <button onClick = {()=> lionsScore(lions + 7)} className="homeButtons__touchdown">Home Touchdown</button>
            <button onClick = {()=> lionsScore(lions + 3)} className="homeButtons__fieldGoal">Home Field Goal</button>
            </div>

            <div className="awayButtons">
            <button onClick = {()=> tigersScore(tigers + 7)} className="awayButtons__touchdown">Away Touchdown</button>
            <button onClick = {()=> tigersScore (tigers +3)}className="awayButtons__fieldGoal">Away Field Goal</button>
            </div>
      </section>

    );
}



export default Buttons;