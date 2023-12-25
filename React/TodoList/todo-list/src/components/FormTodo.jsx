import React, { useState } from 'react';

const FormTodo = (props) => {
    const [inputTodo, setInputTodo] = useState("")
    const {listTodo, setListTodo} = props
    const handleSubmit = (e) => {
        e.preventDefault()
        if(inputTodo.length === 0){
            return;
        }
        setListTodo([...listTodo, inputTodo])
        setInputTodo("")

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setInputTodo(e.target.value)} value={inputTodo}/>
                <button>Add</button>
            </form>
        </div>
    );
}

export default FormTodo;
