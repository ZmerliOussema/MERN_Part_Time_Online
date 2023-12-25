import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

const EditAuthor = (props) => {
    const {id} = useParams()
    const [name, setName] = useState('')
    const [errors, setErrors] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/authors/${id}`)
            .then((res) => {
                console.log(res.data.author.name);
                setName(res.data.author.name)
            })
            .catch((err) => console.log(err));
    }, []);

    const handleSubmit = e => {
        e.preventDefault()

        axios
        .put(`http://localhost:8000/api/authors/${id}`, {
            name
        })
        .then((res) => {
            console.log(res);
            navigate('/')
        })
        .catch((err) => {
            console.log(err.response.data.error.errors.name.message);
            setErrors(err.response.data.error.errors.name.message)
        }
            )
    }

    return (
        <div>
            <h1>Favorite authors</h1>
            <Link to='/'>Home</Link>
            <h3>Edit this Author</h3>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" onChange={e => setName(e.target.value)} value={name} />
                {
                    errors ?
                        <p style={{ color: 'red' }}>The Author name must be at least 3 characters</p> :
                        null
                }
                <div>
                    <input type="submit" value='Cancel' />
                    <input type="submit" value='Submit' />
                </div>
            </form>
        </div>
    );
}

export default EditAuthor;
