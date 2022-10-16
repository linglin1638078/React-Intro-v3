import React from 'react';
import PropTypes from 'prop-types';//library for prop type

const Box = ({color, selectedColor, setSelectedColor}) => {
    const boxStyles = {
        background: color,
        width: '100px',
        height: '100px'
    };

    if (selectedColor === color) {
        boxStyles.border = '3px solid purple'
    }

    const selectColor = () => {
        setSelectedColor(color)
    }

    return (
        <div onClick={selectColor} style = {boxStyles}>
            
        </div>
    );
};

//above is the de-structure version of below
/*const Box = (props) => {
    const boxStyles = {
        background: props.color,
        width: '100px',
        height: '100px'
    };

    return (
        <div style = {boxStyles}>
            
        </div>
    );
};*/

//define prop type
Box.propTypes = {
    color: PropTypes.string,
    selectedColor: PropTypes.string,
    setSelectedColor: PropTypes.func
}

export default Box;