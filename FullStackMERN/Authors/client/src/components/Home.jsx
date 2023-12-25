import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

const Home = (props) => {
    const [authorsList, setAuthorsList] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then((res) => {
                console.log(res.data.authors);
                setAuthorsList(res.data.authors);
            })
            .catch((err) => console.log(err));
    }, []);

    const handleRemove = id => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
        .then((res) => {
            console.log(res.data);
            const newAuthorList = authorsList.filter((author, index) => author._id !== id)
                setAuthorsList(newAuthorList);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    return (
        <div>
            <h1>Favorite authors</h1>
            <Link to='/new'>Add an author</Link>
            <h3>We have quotes by</h3>
            <table>
                <tr>
                    <th>Author</th>
                    <th>Actions available</th>
                </tr>
                {
                    authorsList.map((author, index) => (
                        <tr key={index}>
                        <td>{author.name}</td>
                        <td>
                            <Link to={`/edit/${author._id}`}>
                                <button>Edit</button>
                            </Link>
                            <button onClick={() => handleRemove(author._id)}>Delete</button>
                        </td>
                    </tr>
                    ))
                }
            </table>
        </div>
    );
}

export default Home;
