import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import NewOrder from './components/NewOrder';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/new' element={<NewOrder/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
