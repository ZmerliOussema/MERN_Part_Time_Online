import logo from './logo.svg';
import './App.css';
import PersonCard from './PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard 
      name = {"Doe, Jane"} 
      age = {45} 
      hairColor = {"Black"} 
      />
      <PersonCard 
      name = {"Smith, John"} 
      age = {88} 
      hairColor = {"Brown"} 
      />
    </div>
  );
}

export default App;
