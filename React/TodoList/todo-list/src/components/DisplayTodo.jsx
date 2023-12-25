import React, { useState } from 'react';

const DisplayTodo = (props) => {
    const {listTodo, setListTodo} = props
    const [checked, setChecked] = useState([]);
    
    const isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked, event.target.value];
        } else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
        };

    const handleDelete = (id) => {
        const newList = listTodo.filter((item, index) => index !== id)
        setListTodo(newList)
    }

    return (
        <div>
            {
                listTodo.map((item, index) => (
                    <div key={index}>
                        <input type="checkbox" onChange={handleCheck} value={item}/>
                        <span className={isChecked(item)} style={{margin:"10px"}}>{item}</span>
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </div>
                ))
            }
        </div>
    );
}

export default DisplayTodo;
