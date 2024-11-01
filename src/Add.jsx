import React, { useRef } from 'react';

function Add() {
    // Create references for the input fields and result field
    const num1Ref = useRef(null);
    const num2Ref = useRef(null);
    const resultRef = useRef(null);

    // Function to perform addition when the button is clicked
    const handleAddition = () => {
        // Retrieve values from the input fields
        const num1 = parseFloat(num1Ref.current.value);
        const num2 = parseFloat(num2Ref.current.value);

        // Calculate the sum of the two numbers
        const sum = num1 + num2;

        // Display the sum in the result input field
        resultRef.current.value = sum;
    };

    return (
        <>
            <h2>Addition of Two Numbers</h2>
            {/* Input field for the first number */}
            <input ref={num1Ref} type="number" placeholder="Enter first number" />
            
            {/* Input field for the second number */}
            <input ref={num2Ref} type="number" placeholder="Enter second number" /><br></br>
            
            {/* Button to trigger addition operation */}
            <button onClick={handleAddition}>Add</button>
            
            {/* Input field to display the result (read-only) */}
            <input ref={resultRef} type="text" placeholder="Result" readOnly />
        </>
    );
}

export default Add;
