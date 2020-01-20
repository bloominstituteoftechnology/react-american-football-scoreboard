import React, {useState} from 'react';
import BottomRow from './BottomRow';
import HomeButtons from './HomeButtons';
import AwayButtons from './AwayButtons';
import TopRow from './TopRow'


function ScoreBoard(props){
    console.log('These are the props:',props);
    const [awayScore, setAwayScore]=useState(0);
    const [homeScore, setHomeScore]=useState(0);
    const  addAwayTD = () => setAwayScore(awayScore+7);
    const  addAwayFG = () => setAwayScore(awayScore+3);
    const  addHomeTD = () => setHomeScore(homeScore+7);
    const  addHomeFG = () => setHomeScore(homeScore+3);
    
  return (
      
        <div className="container">
      <section className="scoreboard">
        <TopRow homeName={props.input.homeTeam} awayName={props.input.awayTeam} homeScore={homeScore} awayScore={awayScore}/>
        <BottomRow />
      </section>
      <section className="buttons">
        <HomeButtons addHomeTD={addHomeTD} addHomeFG={addHomeFG} />
        <AwayButtons addAwayTD={addAwayTD} addAwayFG={addAwayFG} />
      </section>
    </div>
  );
}

export default ScoreBoard;