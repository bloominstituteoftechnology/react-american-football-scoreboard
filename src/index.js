/** @format */

import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

/*1. Hold each team's current score in a state value
2. Render each team's current score that is in state to the DOM.
3. Be able to click the different buttons to increment the appropriate team's score by the correct amount

#### Adding Team Scores to the Component's State

- [ ] Import the `useState` hook
- [ ] Set up the state values for the Lions team score using the state hook

```js
const [value, setValue] = useState(); // Give these better names, and decide whether you want to pass an initial score into the state hook as the initialValue
```

- [ ] Set up the state value for the Tigers team score using a second state hook call*/

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, document.getElementById("root"));
