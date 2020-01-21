import React from 'react';

export default function TopRow(props){
    return (

<div className="topRow"> 
    <div className="home">
        <h2 className="home__name">{progitps.input.homeTeam}</h2>
        <div className="home__score">{props.homeScore}</div>
        </div>
    <div className="timer">15:00</div>
    <div className="away">
        <h2 className="away__name">{props.input.awayTeam}</h2>
        <div className="away__score">{props.awayScore}</div>
    </div>
</div>
    )

}