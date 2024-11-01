import React, { useRef } from 'react';

function Average() {
    const mathsRef = useRef(null);
    const scienceRef = useRef(null);
    const socialRef = useRef(null);
    const totalRef = useRef(null);
    const averageRef = useRef(null);

    const handleTotal = () => {
        const maths = parseFloat(mathsRef.current.value) ;
        const science = parseFloat(scienceRef.current.value);
        const social = parseFloat(socialRef.current.value) ;
        const total = maths + science + social;
        totalRef.current.value = total;
    };

    const handleAverage = () => {
        const maths = parseFloat(mathsRef.current.value) ;
        const science = parseFloat(scienceRef.current.value) ;
        const social = parseFloat(socialRef.current.value) ;
        const average = (maths + science + social) / 3;
        averageRef.current.value = average;
    };

    return (
        <>
            <h1>Marks of a student</h1>

            <label>Maths marks: </label>
            <input type="number" ref={mathsRef} placeholder="Enter maths marks" /><br /><br />

            <label>Science marks: </label>
            <input type="number" ref={scienceRef} placeholder="Enter science marks" /><br /><br />

            <label>Social marks: </label>
            <input type="number" ref={socialRef} placeholder="Enter social marks" /><br /><br />

            <label>Total marks: </label>
            <input type="number" ref={totalRef} placeholder="See total marks" readOnly />

            <button onClick={handleTotal}>Calculate Total Marks</button><br /><br />

            <label>Average marks: </label>
            <input type="number" ref={averageRef} placeholder="Average marks" readOnly />

            <button onClick={handleAverage}>Calculate Average Marks</button>
        </>
    );
}

export default Average;