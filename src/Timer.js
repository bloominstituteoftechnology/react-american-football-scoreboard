import React,{ useState, useEffect } from "react";

function Timer(){
    let [second, setSecond] = useState(0);
    let [isActive, setIsActive] = useState(false);
    let [min, setMin] = useState(0);
    const [totalTime, setTotalTime] = useState(0);

  
    function start(){
        setIsActive(!isActive);
    }
    function reset(){
        setSecond(0);
        setMin(0);
        setTotalTime(0);
        setIsActive(false);
    }
    function calculateClock(time) {
        const mins = Math.floor(time / 60);
        const seconds = time - mins * 60;
        setMin(mins);
        setSecond(seconds);
      }
    
    useEffect(() => {
        let interval = null;
        if(isActive){
            interval = setInterval(() => {
                setTotalTime(totalTime + 1);
                calculateClock(totalTime + 1);
            }, 1000);
        }

        return () => clearInterval(interval); 
     }, [isActive, totalTime]);

        
return( <div>
            <h3>00:{min}:{second}</h3>
            <button 
                className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} 
                onClick={start}>
                Start
            </button>
            <button 
                className="button button-primary"
                type="button"
                onClick ={reset}>
                Clear
            </button>
    </div>
    )};
    
export default Timer;