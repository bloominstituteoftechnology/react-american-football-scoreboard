import React, {useState} from "react";
import "./App.css";


const Down = () => {
    
    const [curDown, setCurDown] = useState(1)
    
    return (
        <div className="down" onClick={() => setCurDown((curDown < 4) ? curDown + 1 : 1)}>
            <h3 className="down__title">Down</h3>
            <div className="down__value">{curDown}</div>
        </div>
    )
}

export default Down;