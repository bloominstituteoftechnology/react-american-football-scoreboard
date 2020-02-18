import React, {useState} from "react";
import "./App.css";


function Home(props) {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

//   const [home, setHome] = useState(0)
 
  

  return (
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{props.home}</div>

            

          </div>
          )
}

export default Home;