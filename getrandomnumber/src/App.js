import React, { useState } from "react";

export default function App() {
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(100);
  const [randomNum, setRandomNum] = useState();

  const intGenerator = () => {
    setRandomNum(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal));
  };
  return (
    <div className="container">
      <div className="randomNum">
        <p>
          Random number <span>{randomNum}</span>
        </p>
      </div>
      <div className="numContainer">
        <div>
          <p>Min:</p>
          <input
            type="number"
            value={minVal}
            onChange={(e) => setMinVal(+e.target.value)}
          />
        </div>

        <div>
          <p>Max:</p>
          <input
            type="number"
            value={maxVal}
            onChange={(e) => setMaxVal(+e.target.value)}
          />
        </div>
      </div>
      <button onClick={intGenerator}>Get random number</button>
    </div>
  );
}
