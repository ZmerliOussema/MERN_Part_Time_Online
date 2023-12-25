import React, { useEffect, useRef, useState } from 'react';
import axios from "axios"

const Display = (props) => {
    const {category, id} = props
    const [result, setResult] = useState({})
    const [failed, setFailed] = useState(false)
    const isMounted = useRef(false)
    useEffect(() => {
        if(isMounted.current){
            axios
            .get(`https://swapi.dev/api/${category}/${id}`)
            .then((response) => {
            console.log(response.data);
            setResult(response.data)
            setFailed(false)
            })
            .catch((err) => {
                console.log(err);
                setFailed(true);
            });
        }
        else{
            isMounted.current = true
        }
        
        }, [category, id]); 

    if (failed) {
        return(
            <div>
                <p>These aren't the droids you're looking for</p>
                <img src="https://api.time.com/wp-content/uploads/2015/12/star-wars-episode-iii-revenge-of-the-sith-obi-wan.jpg?w=800&quality=85" alt="Obi-Wan" width="200" height="200" />
            </div>
            );
    }

    if(category === 'people') {
        return(
            <div>
                <h1>{result.name}</h1>
                <p>Height: {result.height}</p>
                <p>Hair Color: {result.hai_color}</p>
                <p>Eye Color: {result.eye_color}</p>
                <p>Skin Color: {result.skin_color}</p>
            </div>
        )
    }
    else {
        return(
            <div>
                <h1>{result.name}</h1>
                <p>Height: {result.climate}</p>
                <p>Hair Color: {result.terrain}</p>
                <p>Eye Color: {result.surface_water}</p>
                <p>Skin Color: {result.population}</p>
            </div>
        )
    }
}

export default Display;
