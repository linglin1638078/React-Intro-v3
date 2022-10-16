import React, { useState } from 'react';
import PropTypes from 'prop-types';//library for prop type


const counterContainer = {
    display: 'flex',
    justifyCotent: 'space-around',
    backgroundColor: 'dodgerBlue'
}

const Counter = ({type, numToIncreaseBy}) => {
    const [count, setCount] = useState(0);

    const increaseCountByOne = () => {
        setCount(count + numToIncreaseBy);
    };

    return (
        <div style = {counterContainer}>
            <p>{type}: {count}</p>
            <button onClick={increaseCountByOne}>Add {numToIncreaseBy} {type}</button>
        </div>
    );
};

Counter.propTypes = {
    type: PropTypes.string,
    numToIncreaseBy: PropTypes.number
}

export default Counter;