import React from 'react';
import Counter from './Counter';

const countersContainer = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
}

const Counters = () => {
    return (
        <div style = {countersContainer}>
            <Counter type='Points' numToIncreaseBy={1}/>
            <Counter type = 'Grandmas' numToIncreaseBy={2} />
            <Counter type='Cookies' numToIncreaseBy={5}/>
            <Counter type='Muffins' numToIncreaseBy={10}/>
            <Counter type = 'Eggs' numToIncreaseBy={12}/>
        </div>
    );
};

export default Counters;