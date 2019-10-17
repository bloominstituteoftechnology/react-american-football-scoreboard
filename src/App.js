//TODO: STEP 1 - Import the useState hook.
import React, {useState, useEffect, Component } from "react";

import "./App.css";
// import "./timer.js";
import BottomRow from "./BottomRow";
import { timer } from "rxjs";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [home, setHome] = useState(0);
  const [away, setAway] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minuets, setMinuets] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [count, startCount] = useState(0);
  

  // class timer extends Component {
  //   constructor (props) {
  //     super(props)
  //     this.state = {
  //       count: 1
  //     }
  //   }
  
  //   render () {
  //     const {count} = this.state
  //     return (
  //       <div>
  //         <h1>Current Count: {count}</h1>
  //       </div>
  //     )
  //   }
  //   // setInterval
  //   // clearInterval
  //   componentDidMount () {
  //     const {startCount} = this.props
  //     this.setState({
  //       count: startCount
  //     })
  //     this.doIntervalChange()
  //   }
  
  //   doIntervalChange = () => {
  //       this.myInterval = setInterval(() => {
  //       this.setState(prevState => ({
  //         count: prevState.count - 1
  //       }))
  //     }, 1000)
  //   }
  
  //   componentWillUnmount () {
  //     clearInterval(this.myInterval)
  //   }
  // }
  
  
  //   if (setSeconds){
  //     () => setSeconds(60);
  //   }
  //   setSeconds(0);
  // }
  
  
  
  
  useEffect(() => {
    let interval = null;
    if (timer) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 60) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);


  useEffect(() => {
    let interval = null;
    if (timer) {
      interval = setInterval(() => {
        setMinuets(mineuts => minuets + 1);
      }, 60000);
    } else if (!isActive && minuets !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, minuets]);
  
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Bengals</h2>
            

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{home}</div>
          </div>
          <div className="timer">{minuets}:{seconds}</div>
          <div className="away">
            <h2 className="away__name">Browns</h2>
            <div className="away__score">{away}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown"onClick = {() => setHome(home + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal"onClick = {() => setHome(home + 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown"onClick = {() => setAway(away+ 3) }>Away Touchdown</button>
          <button className="awayButtons__fieldGoal"onClick = {() => setAway(away + 7) }>Away Field Goal</button>
        </div>
        <div className = "timer">
          <button className="timer"onClick = {() =>  startCount(count + 1)}>Timer</button>
          
        
          
          </div>
      </section>
    </div>
  );
}
export default App;

