import React from 'react';
import { useParams } from 'react-router-dom';

const String = (props) => {
    const {anyThing} = useParams()
    return (
        <div>
            {
                isNaN(anyThing) ?
                <h1>The word is: {anyThing}</h1>:
                <h1>The number is: {anyThing}</h1>
            }
            
        </div>
    );
}

export default String;
