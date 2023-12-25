import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';


const DisplayAllPM = (props) => {
    const {productList, setProductList} = props
    // const [product, setProduct] = useState([{}])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(response=>{
                // console.log(response.data.products)
                setProductList(response.data.products)
            })
            .catch((err) => {
                console.log(err)
            })
    }, []);  
    return (
        <div>
            <h1>All Products:</h1>
            {
                productList.map((product, index) => (
                    <div key={index}>
                        <Link to={`/products/${product._id}`} >{product.title}</Link>
                    </div>
                    
                ))
            }
        </div>
    );
}

export default DisplayAllPM;
