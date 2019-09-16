import React from 'react';
import PropTypes from 'prop-types';

import TopRow from '../TopRow/TopRow';
import BottomRow from '../BottomRow/BottomRow';

import './Scoreboard.css';


const Scoreboard = ({ awayScore, homeScore }) => (
  <section className="Scoreboard">
    <TopRow homeScore={homeScore} awayScore={awayScore} />
    <BottomRow />
  </section>
);

Scoreboard.propTypes = {
  homeScore: PropTypes.number.isRequired,
  awayScore: PropTypes.number.isRequired,
};

export default Scoreboard;
