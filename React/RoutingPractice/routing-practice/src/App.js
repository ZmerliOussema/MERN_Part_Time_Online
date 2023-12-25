import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import String from './components/String'
import ColoredReturn from './components/ColoredReturn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='home' element = {<Home />}/>
        <Route path='/:anyThing' element = {<String />}/>
        {<Route path='/:word/:colorTxt/:colorBckg' element = {<ColoredReturn/>} />  }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
