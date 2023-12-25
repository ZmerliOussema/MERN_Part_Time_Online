import React, { useState } from 'react';
import axios from 'axios';



const PMForm = (props) => {
    const { productList, setProductList } = props
    const [errors, setErrors] = useState({})
    const [product, setProduct] = useState({
        title: '',
        price: null,
        description: ''
    })
    const [titleValidation, setTitleValidation] = useState('Title must be more than two characters')
    const [priceValidation, setPriceValidation] = useState('You should set a price for the product!')

    const handleSubmit = e => {
        e.preventDefault()

        axios.post('http://localhost:8000/api/products', product)
            .then((res) => {
                console.log(res)
                setProductList([...productList, product])

                setProduct({})
            })
            .catch(
                (err) => {
                    console.log(err.response.data.err.errors)
                    setErrors(err.response.data.err.errors)
                })
    }

    const handleInputChange = e => {
        setProduct({ ...product, [e.target.name]: e.target.value })
        if (e.target.name === 'title') {
            if (e.target.value.length < 2) {
                setTitleValidation('Title must be more than two characters')
            } else {
                setTitleValidation('')
            }
        }
        else if (e.target.name === 'price'){
            if (e.target.value === '') {
                setPriceValidation('You should set a price for the product!')
            } else {
                setPriceValidation('')
            }
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Product Manager</h1>

                <div>
                    <label>Title</label>
                    <input type="text" onChange={handleInputChange} name='title' />
                    {
                        errors.title ?
                            <p>{errors.title.message}</p> :
                            null
                    }

                    {
                        titleValidation ?
                            <p>{titleValidation}</p> :
                            ''
                    }
                </div>

                <div>
                    <label>Price</label>
                    <input type="number" onChange={handleInputChange} name='price' />
                    {
                        errors.price ?
                            <p>{errors.price.message}</p> :
                            null
                    }

                    {
                        priceValidation ?
                            <p>{priceValidation}</p> :
                            ''
                    }
                </div>

                <div>
                    <label>description(optional)</label>
                    <input type="text" onChange={handleInputChange} name='description' />
                </div>

                <input type="submit" value='create' />
            </form>
        </div>

    );
}

export default PMForm;
