import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'

const DisplayOnePM = (porps) => {
    const [product, setProduct] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(response=>{
                console.log(response.data.product)
                setProduct(response.data.product)
            })
            .catch((err) => {
                console.log(err)
            })
    }, []);  

    const handleEdit = e => {
        e.preventDefault()
        navigate(`/edit/${id}`)
    }

    const handleDelete = (e) => {
        e.preventDefault()

            axios
                .delete(`http://localhost:8000/api/products/${id}`)
                .then((res) => {
                    console.log(res)
                    navigate('/')
                })
                .catch((err) => {
                    console.log(err)
                })
    }

    return (
        <div>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>

            <input type="submit" onClick={handleEdit} value='Edit'/>
            <input type="submit" onClick={handleDelete} value='Delete'/>
            <br />
            <Link to='/'>Home</Link>
        </div>
    );
}

export default DisplayOnePM;
