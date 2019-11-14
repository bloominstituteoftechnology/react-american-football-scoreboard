import React,{ useState, useEffect } from "react";
//import { statement } from "@babel/template";


function Timer(){
    let [second, setSecond] = useState(0);
    let [isActive, setIsActive] = useState(false);
    let [min, setMin]= useState(0);
  
    function toggle(){
        setIsActive(!isActive);
    }
    function reset(){
        setSecond(0);
        setIsActive(false);
    }
    
    useEffect(() => {
        let interval = null;
        if(isActive){
            interval = setInterval(() => {
            return  setSecond(second +1);
            }, 1000);
      
        } if ( second === 60){            
            reset();
            setSecond(0);
            setIsActive(true);
        } 
        else if (!isActive  && second !== 0){
            clearInterval(interval);
        }
        return ()=>clearInterval(interval); 
    },[isActive, second]);

    useEffect(() => {
        let minInterval = null;
        if (isActive){
            minInterval = setInterval(() => {
                setMin(min+1);
            }, 60000);
        } if(min === 15){
            reset();
        }else if(!isActive  && min !== 0){
            clearInterval(minInterval);
        }
        return ()=>clearInterval(minInterval); 
    }, [isActive, min]);

return( <div>
            <h3>00:{min}:{second}</h3>
            <button 
                className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} 
                onClick={toggle}>
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