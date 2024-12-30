import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [bmiResult, setBmiResult] = useState(0);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  const weightChange = (event) => {
    const floatWeight = parseFloat(event.target.value);
    setWeight(floatWeight);
  };
  const heightChange = (event) => {
    const floatHeight = parseFloat(event.target.value);
    setHeight(floatHeight);
  };

  function handleClick() {
    const result = (bmiResult + weight) / height ** 2;
    setBmiResult(result);
  }

  return (
    <div className="mainDiv">
      <div className="card">
        <input
          type="text"
          className="height"
          placeholder="enter height"
          onChange={heightChange}
        />
        <input
          type="text"
          className="weight"
          placeholder="enter weight"
          onChange={weightChange}
        />
        <button className="result" onClick={handleClick}>
          Result
        </button>
        <p className="bmiResult">{bmiResult}</p>
      </div>
    </div>
  );
}

export default App;
