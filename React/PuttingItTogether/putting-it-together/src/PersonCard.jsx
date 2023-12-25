import React, { useState } from 'react';

const PersonCard = (props) => {
    const [inAge, setAge] = useState(props.age)
    
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{inAge}</p>
            <p>{props.hairColor}</p>
            <button onClick={(event => setAge(inAge + 1))}>Birthday Button for {props.name}</button>
        </div>
    );
}

export default PersonCard;
