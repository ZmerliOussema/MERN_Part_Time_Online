import { Route, Routes } from 'react-router-dom';
import './App.css';
import DisplayOnePM from './components/DisplayOnePM';
import Main from './view/Main';
import EditPM from './components/EditPM';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/products/:id' element={<DisplayOnePM />}/>
        <Route path='/edit/:id' element={<EditPM />} />
      </Routes>
    </div>
  );
}

export default App;
