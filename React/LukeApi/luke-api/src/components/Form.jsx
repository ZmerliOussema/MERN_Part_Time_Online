import React, { useState } from 'react';
import {useNavigate} from "react-router-dom"

const Form = (props) => {
    const [formCategory, setFormCategory] = useState("people")
    const [formId, setFormId] = useState("")
    const {setCategory, setId} = props
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        setCategory(formCategory)
        setId(formId)

        navigate(`/${formCategory}/${formId}`)
    }
    return (
        <div>
            <label>Search For:</label>
            <select onChange={(e) => setFormCategory(e.target.value)}>
                <option value="">----------</option> 
                <option value="people">People</option>
                <option value="planets">Planets</option>
            </select>
            <input type="number" onChange={(e) => setFormId(e.target.value)} value={formId}/>
            <button onClick={handleSubmit}>Search</button>
        </div>
    );
}

export default Form;
