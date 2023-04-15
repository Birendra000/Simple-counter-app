import React, { useState } from "react";
import "./ind.css";

const App = () => {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h2>This is Counter App </h2>
      <h2>{number}</h2>
      <button type="button" onClick={() => setNumber(number + 1)}>
        INCREAMENT
      </button>
      <button type="button" onClick={() => setNumber(0)}>
        RESET
      </button>
      <button type="button" onClick={() => setNumber(number - 1)}>
        DECREAMENT
      </button>
    </div>
  );
};
export default App;
