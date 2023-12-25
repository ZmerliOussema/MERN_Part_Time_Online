import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditPM = (props) => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})

    const [product, setProduct] = useState({
        title: '',
        price: null,
        description: ''
    })

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(response=>{
                // console.log(response.data.products)
                setProduct(response.data.product)
            })
            .catch((err) => {
                console.log(err)
            })
    }, []); 
    
    const handleSubmit = e => {
        e.preventDefault()

        axios.put(`http://localhost:8000/api/products/${id}`, product)
            .then((res) => {
                console.log(res)
                navigate(`/products/${id}`)
            })
            .catch((err) => {
                console.log(err)
                setErrors(err.response.data.err.errors)
            })
    }

    const handleInputChange = e => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Product Manager</h1>

                <div>
                    <label>Title</label>
                    <input type="text" onChange={handleInputChange} name='title' value={product.title} />
                    {
                        errors.title?
                        <p>{errors.title.message}</p>:
                        null
                    }
                </div>

                <div>
                    <label>Price</label>
                    <input type="number" onChange={handleInputChange} name='price' value={product.price}/>
                    {
                        errors.price?
                        <p>{errors.price.message}</p>:
                        null
                    }
                </div>

                <div>
                    <label>description</label>
                    <input type="text" onChange={handleInputChange} name='description' value={product.description}/>
                </div>

                <input type="submit" value='Edit' />
            </form>
        </div>
    );
}

export default EditPM;
