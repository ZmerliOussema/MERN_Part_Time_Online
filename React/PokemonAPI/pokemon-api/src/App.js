import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
function App() {
  const [pokemon, setPokemon] = useState("")
  
    useEffect(() => {
      
        fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(response => response.json())
        .then(response => setPokemon(response.results))
        .then(response => console.log(response))
      
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
