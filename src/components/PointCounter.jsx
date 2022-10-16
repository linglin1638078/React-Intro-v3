import React from 'react';
import { useState } from 'react';
//import styles from './PointCounter.styles';

const PointCounter = () => {
    const [points, setPoints] = useState(0);
    const addPoint = () => {
        setPoints(points + 1);
    }

    //css style as object - higher priority than styles in css file
    const containerStyles = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        border: '3px solid green'
    }
    
    return (
        <div style = {containerStyles}>{/*style.containerStyles if using style.js*/}
            <p>Points: {points}</p>
            <button onClick={addPoint}>Add One point</button>
        </div>
    )
};

export default PointCounter;