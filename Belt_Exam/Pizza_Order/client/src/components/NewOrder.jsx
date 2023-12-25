import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const NewOrder = (porps) => {
    const [pizzaName, setPizzaName] = useState('Pepperoni')
    const [size, setSize] = useState('Single')
    const [notes, setNotes] = useState('')
    const [deliveryTime, setDeliveryTime] = useState('')
    const navigate = useNavigate()
    const [errors, setErrors] = useState('')

    const handelSubmit = e => {
        e.preventDefault()

        axios
            .post("http://localhost:8000/api/pizzas", {
                pizzaName,          //shorthand for pizzaName:pizzaName
                size,               //shorthand for size:size
                notes,              //shorthand for notes:notes
                deliveryTime        //shorthand for deliveryDate:deliveryDate
            })
            .then((res) => {
                console.log(res.data);
                navigate('/')
            })
            .catch((err) => {
                console.log(err.response.data.error.errors);
                // setErrors(err.response.data.error.errors.notes.message)
            });
    }
    return (
        <div>
            <div className='new-top'>
                <h1>{size} {pizzaName}</h1>
                <Link to='/'>go back home</Link>
            </div>
            <form onSubmit={handelSubmit} className='form-container'>
                <div>
                    <div>
                        <label>Pizzas</label>
                        <select name="" id="" onChange={e => setPizzaName(e.target.value)}>
                            <option value="Pepperoni">Pepperoni</option>
                            <option value="Cheese">Cheese</option>
                            <option value="Combination">Combination</option>
                            <option value="Philly Cheese Steak">Philly Cheese Steak</option>
                            <option value="Hawaiian">Hawaiian</option>
                            <option value="Veggie">Veggie</option>
                        </select>
                    </div>
                    <div>
                        <label>Sizes</label>
                        <select name="" id="" onChange={e => setSize(e.target.value)}>
                            <option value="Single">Single</option>
                            <option value="Single">Single</option>
                            <option value="Medium">Medium</option>
                            <option value="Large">Large</option>
                        </select>
                    </div>
                </div>
                <div>
                    <div>
                        <label>Notes</label>
                        <br />
                        <textarea name="" id="" onChange={e => setNotes(e.target.value)}></textarea>
                        {
                            errors ?
                                <p style={{color: 'red'}}>{errors}</p> :
                                null
                        }
                    </div>
                    <div>
                        <label>Delivery Date</label>
                        <br />
                        <input type="datetime-local" onChange={e => setDeliveryTime(e.target.value)}/>
                        <input type="submit" value='Order Now' />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default NewOrder;
