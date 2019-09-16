import React from 'react';
import PropTypes from 'prop-types';

import './Buttons.css';


const Buttons = ({
  homeScore, setHomeScore, awayScore, setAwayScore,
}) => (
  <section className="Buttons">
    <div className="Buttons-homeButtons">
      <button
        className="Buttons-homeButtons--touchdown"
        type="button"
        onClick={() => {
          setHomeScore(homeScore + 7);
        }}
      >
Home Touchdown
      </button>
      <button
        className="Buttons-homeButtons--fieldGoal"
        type="button"
        onClick={() => {
          setHomeScore(homeScore + 3);
        }}
      >
Home Field Goal
      </button>
    </div>
    <div className="Buttons-awayButtons">
      <button
        className="Buttons-awayButtons--touchdown"
        type="button"
        onClick={() => {
          setAwayScore(awayScore + 7);
        }}
      >
Away Touchdown
      </button>
      <button
        className="Buttons-awayButtons--fieldGoal"
        type="button"
        onClick={() => {
          setAwayScore(awayScore + 3);
        }}
      >
Away Field Goal
      </button>
    </div>
  </section>
);

Buttons.propTypes = {
  homeScore: PropTypes.number.isRequired,
  setHomeScore: PropTypes.func.isRequired,
  awayScore: PropTypes.number.isRequired,
  setAwayScore: PropTypes.func.isRequired,
};

export default Buttons;
