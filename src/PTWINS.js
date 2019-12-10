//TODO: STEP 1 - Import the useState hook.
import React, { useState } from 'react';

function Ptwins() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter => counter + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <h1>{counter}</h1>;
}

ReactDOM.render(<Ptwins />, document.getElementsByClassName('timer'));
