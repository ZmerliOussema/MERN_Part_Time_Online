import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import CreateAuthor from './components/CreateAuthor';
import EditAuthor from './components/EditAuthor';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/new' element={<CreateAuthor/>} />
        <Route path='edit/:id' element={<EditAuthor/>} />
      </Routes>
    </div>
  );
}

export default App;
