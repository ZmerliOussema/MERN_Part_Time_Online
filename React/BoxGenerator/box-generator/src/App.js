import logo from './logo.svg';
import './App.css';
import BoxForm from './components/BoxForm';
import { useState } from 'react';
import BoxDisplay from './components/BoxDisplay';

function App() {
  const [currentColor, setCurrentColor] = useState([])

  const youveGotColor = (newColor) => {
    setCurrentColor([...currentColor, newColor]);
  }
  return (
    <div className="App">
      <BoxForm onNewColor={youveGotColor}/>
      <BoxDisplay color={currentColor}/>
    </div>
  );
}

export default App;
