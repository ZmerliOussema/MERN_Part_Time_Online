import React, { useState } from 'react';

const Form = (props) => {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmpassword] = useState("")
    
    return (
        <div>
            <form>
                <div>
                    <label>First Name: </label> 
                    <input type="text" value={firstname} onChange={ (e) => setFirstname(e.target.value) } />
                </div>
                <br />
                <div>
                    <label>Last Name: </label> 
                    <input type="text" value={lastname} onChange={ (e) => setLastname(e.target.value) } />
                </div>
                <br />
                <div>
                    <label>Email: </label> 
                    <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <br />
                <div>
                    <label>Password: </label> 
                    <input type="text" value={password} onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <br />
                <div>
                    <label>Confirm Password: </label> 
                    <input type="text" value={confirmpassword} onChange={ (e) => setConfirmpassword(e.target.value) } />
                </div>
            </form>
            <h1>You Form Data</h1>
            <p>
                <label>First Name: </label> {firstname}
            </p>
            <p>
                <label>Last Name: </label> {lastname}
            </p>
            <p>
                <label>Email: </label> {email}
            </p>
            <p>
                <label>Password</label> {password}
            </p>
            <p>
                <label>Confirm Password: </label> {confirmpassword}
            </p>
        </div>
        
    );
}

export default Form;
