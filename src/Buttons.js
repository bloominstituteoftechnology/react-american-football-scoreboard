<section className="buttons">
<div className="homeButtons">
  {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
  <button className="homeButtons__touchdown" onClick={() => setValueLions(scoreLions + 7)}>Home Touchdown</button>
  <button className="homeButtons__fieldGoal" onClick={() => setValueLions(scoreLions + 3)}>Home Field Goal</button>
</div>
<div className="awayButtons">
  <button className="awayButtons__touchdown" onClick={() => setValueTigers(scoreTigers + 7)}>Away Touchdown</button>
  <button className="awayButtons__fieldGoal" onClick={() => setValueTigers(scoreTigers + 3)}>Away Field Goal</button>
</div>
</section>