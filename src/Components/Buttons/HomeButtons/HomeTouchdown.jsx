import React from "react";
import '../../../App.css';

const HomeTouchDown = (props) => {

    function addScore() {
        return props.newScore(props.score + 7);
    };

    return (
        <button className="homeButtons__touchdown" onClick={() => addScore()}>Home Touchdown</button>
    );
};

export default HomeTouchDown;