import React, {useState} from "react";
import "./App.css";


const Down = (props) => {
    //const [curDown, setCurDown] = useState(1);

    return (
        // <div className="down" onClick={() => setCurDown((curDown < 4) ? curDown + 1 : 1)}>
        <div className="down" onClick={() => props.clickFunction()}>
            <h3 className="down__title">Down</h3>
            <div className="down__value">{props.data}</div>
        </div>
    )
}

export default Down;