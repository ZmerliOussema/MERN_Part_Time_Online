import './App.css';
import FormTodo from './components/FormTodo';
import DisplayTodo from './components/DisplayTodo';
import { useState } from 'react';

function App() {
  const [listTodo, setListTodo] = useState([])
  return (
    <div className="App">
    <FormTodo listTodo={listTodo} setListTodo={setListTodo}/>
    <hr />
    <DisplayTodo listTodo={listTodo} setListTodo={setListTodo}/>
    </div>
  );
}

export default App;
