import React from "react";
import "./App.css";


function Away(props) {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

//   const [home, setHome] = useState(0)
 
  

  return (
          <div className="away">
            <h2 className="away__name">Tigers</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="away__score">{props.away}</div>

          </div>
          )
}

export default Away;