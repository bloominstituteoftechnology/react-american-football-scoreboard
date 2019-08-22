import React, { useState, useEffect } from 'react'
import "./App.css";

const Timer = () => {
    const [seconds, setSeconds] = useState(60);
    const [isActive, setIsActive] = useState(false);

    function toggle() { 
        setIsActive(!isActive);
    }
    function reset(){
        setSeconds(60);
        setIsActive(false);
    }

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds  -1);
            }, 1000);
        }else if (!isActive && seconds ==0){
            clearInterval(interval);
        }
        if(isActive && seconds == 0){
            setIsActive(false);

        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    return(
        <div className="app">
            <div className="timer">00:{seconds}</div>
            <div className="row">
                <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
                    {isActive ? 'Pause' : 'Start'}
                </button>
                <button className="button" onClick={reset}>
                 Reset
                </button>
                
            </div>
        </div>
    );
    
};

export default Timer;

