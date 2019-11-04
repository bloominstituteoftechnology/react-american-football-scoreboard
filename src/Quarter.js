import React, {useState} from 'react';
import "./App.css";

const Quarter = () => {
    const [curQuarter, setCurQuarter] = useState(1);

    return (
        <div className="quarter" onClick={() => setCurQuarter((curQuarter < 4) ? curQuarter + 1 : 1)}>
            <h3 className="quarter__title">Quarter</h3>
            <div className="quarter__value">{curQuarter}</div>
        </div>
    )
}

export default Quarter;