import React from 'react';
import '../../App.css';

const Away = (props) => {
    return (
        <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{props.awayScore}</div>
        </div>
    );
};

export default Away;