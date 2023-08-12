import React, { useState } from 'react';

const ScientificCalculator = () => {
    const [result, setResult] = useState('');

    // Function to handle button clicks
    const handleClick = (value) => {
        switch (value) {
            case 'sin':
                setResult(Math.sin(result));
                break;
            case 'cos':
                setResult(Math.cos(result));
                break;
            case 'tan':
                setResult(Math.tan(result));
                break;
            case 'sqrt':
                setResult(Math.sqrt(result));
                break;
            case 'pi':
                setResult(Math.PI);
                break;
            case 'e':
                setResult(Math.E);
                break;
            case ')':
                setResult((prevResult) => prevResult + value);
                break;
            default:
                setResult((prevResult) => prevResult + value);
        }
    };

    // Function to calculate the result
    const calculateResult = () => {
        try {
            setResult(eval(result));
        } catch (error) {
            setResult('Error');
        }
    };

    // Function to clear the result
    const clearResult = () => {
        setResult('');
    };

    return (
        <div className="calculator bg-white rounded-lg p-4 shadow-md">
            <div className="result text-gray-800 text-2xl font-bold mb-4 p-2 bg-gray-100 rounded-md">{result}</div>
            <div className="buttons grid grid-cols-6 gap-2">
                {/* Basic calculator buttons */}
                <button className="btn btn-outline col-span-2" onClick={() => handleClick('7')}>7</button>
                <button className="btn btn-outline col-span-2" onClick={() => handleClick('8')}>8</button>
                <button className="btn btn-outline col-span-2" onClick={() => handleClick('9')}>9</button>
                <button className="btn btn-accent" onClick={() => handleClick('+')}>+</button>
                <button className="btn btn-outline col-span-2" onClick={() => handleClick('4')}>4</button>
                <button className="btn btn-outline col-span-2" onClick={() => handleClick('5')}>5</button>
                <button className="btn btn-outline col-span-2" onClick={() => handleClick('6')}>6</button>
                <button className="btn btn-accent" onClick={() => handleClick('-')}>-</button>
                <button className="btn btn-outline col-span-2" onClick={() => handleClick('1')}>1</button>
                <button className="btn btn-outline col-span-2" onClick={() => handleClick('2')}>2</button>
                <button className="btn btn-outline col-span-2" onClick={() => handleClick('3')}>3</button>
                <button className="btn btn-accent" onClick={() => handleClick('*')}>*</button>
                <button className="btn btn-outline col-span-2" onClick={() => handleClick('0')}>0</button>
                <button className="btn btn-outline col-span-2" onClick={() => handleClick('.')}>.</button>
                <button className="btn btn-accent col-span-2" onClick={calculateResult}>=</button>
                {/* Scientific calculator buttons */}
                <button className="btn btn-accent col-span-2" onClick={() => handleClick('sqrt(')}>√</button>
                <button className="btn btn-accent col-span-2" onClick={() => handleClick('sin(')}>sin</button>
                <button className="btn btn-accent col-span-2" onClick={() => handleClick('cos(')}>cos</button>
                <button className="btn btn-accent col-span-2" onClick={() => handleClick('tan(')}>tan</button>
                <button className="btn btn-accent col-span-2" onClick={() => handleClick(')')}>''</button>
                <button className="btn btn-outline col-span-2" onClick={() => handleClick(')')}>)</button>
                <button className="btn btn-accent col-span-2" onClick={() => handleClick('ln(')}>ln</button>
                <button className="btn btn-accent col-span-2" onClick={() => handleClick('e')}>e</button>
                <button className="btn btn-accent col-span-2" onClick={() => handleClick('^')}>^</button>
                <button className="btn btn-accent col-span-2" onClick={() => handleClick('%')}>%</button>
                {/* Add more scientific functions as needed */}
                {/* ... */}
                <button className="btn btn-accent col-span-2" onClick={() => handleClick('log(')}>log</button>
                <button className="btn btn-accent col-span-2" onClick={() => handleClick('ln(')}>ln</button>
                <button className="btn btn-accent col-span-2" onClick={() => handleClick('pi')}>π</button>
                <button className="btn btn-outline col-span-2" onClick={clearResult}>C</button>
            </div>
        </div>
    );
};

export default ScientificCalculator;
