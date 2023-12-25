import React from 'react';
import { useParams } from 'react-router-dom';

const ColoredReturn = (props) => {
    const {word, colorTxt, colorBckg} = useParams()
    return (
        <div>
            <h1 style={{
                color: colorTxt,
                backgroundColor: colorBckg
            }}>The word is: {word}</h1>
        </div>
    );
}

export default ColoredReturn;
