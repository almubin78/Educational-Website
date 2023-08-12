import React, { useState } from 'react';

const Calculator = () => {
  const [result, setResult] = useState('');

  // Function to handle button clicks
  const handleClick = (value) => {
    setResult((prevResult) => prevResult + value);
  };

  // Function to calculate the result
  const calculateResult = () => {
    try {
      setResult(eval(result));
    } catch (error) {
      setResult('Error');
    }
  };
  // Function to decrease the input by one character
  const handleBackspace = () => {
    setResult((prevResult) => prevResult.slice(0, -1));
  };
  // Function to clear the result
  const clearResult = () => {
    setResult('');
  };

  return (
    <div className="calculator bg-white rounded-lg p-4 shadow-md">
      <div className="result text-gray-800 text-2xl font-bold mb-4 p-2 bg-gray-100 rounded-md">{result}</div>
      <div className="buttons grid grid-cols-4 gap-2">
        <button className="btn btn-outline " onClick={clearResult}>C</button>
        <button className="btn btn-outline" onClick={handleBackspace}>{"<"}</button>
        <button className="btn btn-outline" onClick={() => handleClick('(')}>(</button>
        <button className="btn btn-outline" onClick={() => handleClick(')')}>)</button>
        <button className="btn btn-accent" onClick={() => handleClick('/')}>/</button>
        <button className="btn btn-outline" onClick={() => handleClick('7')}>7</button>
        <button className="btn btn-outline" onClick={() => handleClick('8')}>8</button>
        <button className="btn btn-outline" onClick={() => handleClick('9')}>9</button>
        <button className="btn btn-accent" onClick={() => handleClick('*')}>*</button>
        <button className="btn btn-outline" onClick={() => handleClick('4')}>4</button>
        <button className="btn btn-outline" onClick={() => handleClick('5')}>5</button>
        <button className="btn btn-outline" onClick={() => handleClick('6')}>6</button>
        <button className="btn btn-accent" onClick={() => handleClick('-')}>-</button>
        <button className="btn btn-outline" onClick={() => handleClick('1')}>1</button>
        <button className="btn btn-outline" onClick={() => handleClick('2')}>2</button>
        <button className="btn btn-outline" onClick={() => handleClick('3')}>3</button>
        <button className="btn btn-accent" onClick={() => handleClick('+')}>+</button>
        <button className="btn btn-outline " onClick={() => handleClick('0')}>0</button>
        <button className="btn btn-outline" onClick={() => handleClick('.')}>.</button>
        <button className="btn btn-accent" onClick={calculateResult}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
