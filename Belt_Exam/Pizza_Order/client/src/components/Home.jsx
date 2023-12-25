import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

const Home = (props) => {
    const [pizzasList, setPizzasList] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/pizzas")
            .then((res) => {
                console.log(res.data.pizzas);
                setPizzasList(res.data.pizzas);
            })
            .catch((err) => console.log(err));
    }, []);

    const formatDate = (dateTimeString) => {
        const date = new Date(dateTimeString)
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    };

    const handleRemove = (id) => {
        axios.delete(`http://localhost:8000/api/pizzas/${id}`)
            .then((res) => {
                console.log(res.data);
                const newPiazzaList = pizzasList.filter((pizza, index) => pizza._id !== id)
                setPizzasList(newPiazzaList);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div className='home-container'>
            <div className='home-top'>
                <h1>Pizza Order</h1>
                <Link to='/new'>
                    <button className='button-top'>Order a Pizza</button>
                </Link>
            </div>
            <h3>Find stores in your area!</h3>
            <table>
                <tr>
                    <th>Delivery Time</th>
                    <th>Pizza</th>
                    <th>Size</th>
                    <th>Delivered</th>
                    <th>Actions</th>
                </tr>
                {
                    pizzasList.map((pizza, index) => (
                        <tr key={index}>
                            <td>{formatDate(pizza.deliveryTime)}</td>
                            <td>{pizza.pizzaName}</td>
                            <td>{pizza.size}</td>
                            <td>False</td>
                            <td>
                                <button onClick={() => handleRemove(pizza._id)} className='button-remove'>Remove</button>
                            </td>
                        </tr>
                    ))
                }
            </table>
        </div>

    );
}

export default Home;
