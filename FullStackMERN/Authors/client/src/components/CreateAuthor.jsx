import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';

const CreateAuthor = (props) => {
    const [name, setName] = useState('')
    const [errors, setErrors] = useState('')
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()

        axios
            .post("http://localhost:8000/api/authors", {
                name
            })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setName('')
                setErrors('')
                navigate('/')
            })
            .catch((err) => {
                console.log(err.response.data.error.errors.name.message);
                setErrors(err.response.data.error.errors.name.message)
            });
    }

    return (
        <div>
            <h1>Favorite authors</h1>
            <Link to='/'>Home</Link>
            <h3>Add a new author</h3>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" onChange={e => setName(e.target.value)} value={name}/>
                {
                    errors?
                    <p style={{color:'red'}}>The Author name must be at least 3 characters</p>:
                    null
                }
                <div>
                    <input type="submit" value='Cancel'/>
                    <input type="submit" value='Submit'/>
                </div>
            </form>
        </div>
    );
}

export default CreateAuthor;
