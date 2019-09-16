import React from 'react';
import PropTypes from 'prop-types';

import './TopRow.css';


const TopRow = ({ awayScore, homeScore }) => (
  <div className="TopRow">
    <div className="TopRow-home">
      <h2 className="TopRow-home--name">Lions</h2>

      <div className="TopRow-home--score">{homeScore}</div>
    </div>
    <div className="TopRow-timer">00:03</div>
    <div className="TopRow-away">
      <h2 className="TopRow-away--name">Tigers</h2>
      <div className="TopRow-away--score">{awayScore}</div>
    </div>
  </div>
);

TopRow.propTypes = {
  homeScore: PropTypes.number.isRequired,
  awayScore: PropTypes.number.isRequired,
};

export default TopRow;
