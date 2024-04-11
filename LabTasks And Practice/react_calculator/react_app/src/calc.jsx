import React, { useState } from "react";

function Calc() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    setInputValue(inputValue + value);
  };

  const clearInput = () => {
    setInputValue("");
    setResult("");
  };

  const calculateResult = () => {
    try {
      setResult(eval(inputValue));
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="calc_div">
      <input
        type="text"
        name=""
        id="calVals"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => handleButtonClick("*")}>x</button>
      <button onClick={() => handleButtonClick("/")}>/</button>
      <button onClick={() => handleButtonClick("+")}>+</button>
      <button onClick={() => handleButtonClick("-")}>-</button>
      <button onClick={clearInput}>Clear</button>
      <button onClick={calculateResult}>=</button>
      <p>Result: {result}</p>
    </div>
  );
}

export default Calc;
