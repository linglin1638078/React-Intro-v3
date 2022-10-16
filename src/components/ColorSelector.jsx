import React, { useState } from 'react';
import Box from './Box';

const ColorSelector = () => {
    const [selectedColor, setSelectedColor] = useState('none');
    return (
        <div>
            <p>Selected Color: {selectedColor}</p>
            <div style={{ display: 'flexbox', flexWrap: 'wrap' }}> 
                <Box color='red' selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
                <Box color = 'blue' selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
                <Box color='green' selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
                <Box color='yellow' selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
                <Box color='pink' selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
                <Box color = 'orange' selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
            </div>
        </div>
    ); 
};

export default ColorSelector;