import axios from 'axios'
import './App.css';
import {useState, useEffect} from 'react'

function App() {
  const [pokemon, setPokemon] = useState([]);

      useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
          .then(response => {
            console.log(response)
            setPokemon(response.data.results)
          })
          .catch((err => console.log(err))) 
            
    }, []);
  return (
    <div className="App">
      <div>
            {pokemon.length > 0 && pokemon.map((pokemon, index)=>{
                return (<div key={index}>{pokemon.name}</div>)
            })}
        </div>
    </div>
  );
}

export default App;
