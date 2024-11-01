import React, { useRef } from 'react';

function Calculator() {
    const num1Ref = useRef(null);
    const num2Ref = useRef(null);
    const resRef = useRef(null);
    const operationRef = useRef(null);

    const handleCalculate = () => {
        const num1 = parseFloat(num1Ref.current.value) ;
        const num2 = parseFloat(num2Ref.current.value) ;
        const operation = operationRef.current.value;
        let result;

        switch (operation) {
            case "add":
                result = num1 + num2;
                break;
            case "sub":
                result = num1 - num2;
                break;
            case "mul":
                result = num1 * num2;
                break;
            case "div":
                result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
                break;
            default:
                result = "Invalid operation";
        }

        resRef.current.value = result;
    };

    return (
        <>
            <h1>Calculator</h1>

            <label>Enter First Number:</label>
            <input type="number" ref={num1Ref} placeholder="Enter first number" /><br /><br />

            <label>Enter Second Number:</label>
            <input type="number" ref={num2Ref} placeholder="Enter second number" /><br /><br />

            <label>Select Operation:</label>
            <select ref={operationRef}>
                <option value="add">Add</option>
                <option value="sub">Subtract</option>
                <option value="mul">Multiply</option>
                <option value="div">Divide</option>
            </select><br /><br />

            <button onClick={handleCalculate}>Calculate</button><br /><br />

            <label>Result:</label>
            <input type="text" ref={resRef} placeholder="Result" readOnly /><br /><br />
        </>
    );
}

export default Calculator;