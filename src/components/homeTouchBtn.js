import React, { useState } from "react";

{
  /* <button
className="homeButtons__touchdown"
onClick={event => setHomeScore(homeScore + 7)}
>
Home Touchdown
</button>

<button
className="homeButtons__fieldGoal"
onClick={event => setHomeScore(homeScore + 3)}
> */
}

const HomeTouchBtn = props => {
  const [homeScore, setHomeScore] = useState(0);
  // const touchdown = 7;
  // const field = 3;

  return (
    <button
      className="homeButtons__touchdown"
      onClick={() => setHomeScore(homeScore + 7)}
    >
      Home Touch Down
    </button>
  );
};

export default HomeTouchBtn;
