import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Display from './components/Display';

function App() {
  const [id, setId] = useState("people")
  const [category, setCategory] = useState("")

  const myPath = "/" + category + "/" + id
  console.log(myPath)

  return (
    <BrowserRouter>
      <div className='App'>
        <Form category={category} setCategory={setCategory} id={id} setId={setId}/>
        <Routes>
          <Route path={myPath} element={<Display category={category} id={id} />} />
        </Routes>
      </div>
    </BrowserRouter>
    
)}

export default App;
