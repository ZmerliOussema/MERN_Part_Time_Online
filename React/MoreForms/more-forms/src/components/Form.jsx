import React, { useState } from 'react';

// We will use an onChange synthetic event to capture into state 
//    each character as it is typed

const Form = (props) => {
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword] = useState("");

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const handleFirstName =(e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 2){
            setFirstNameError("First name must be 2 characters or more !")
        }else {
            setFirstNameError("");
        }
    }

    const handleLastName =(e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 2){
            setLastNameError("Last name must be 2 characters or more !")
        }else {
            setLastNameError("");
        }
    }

    const handleEmail =(e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5){
            setEmailError("Email must be at least 5 characters !")
        }else {
            setEmailError("");
        }
    }

    const handlePassword =(e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8){
            setPasswordError("Password must be at least 8 characters !")
        }else {
            setPasswordError("");
        }
    }

    const handleConfirmPassword =(e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value.length < 8){
            setConfirmPasswordError("Password must be at least 8 characters !")
        }
        else if (password != setConfirmPassword) {
            setConfirmPasswordError("Passwords must match !")
        }
        else {
            setConfirmPasswordError("");
        }
    }

  // using an object to hold style options for our results div
    const formDataDivStyle = {
        textAlign: "left", 
        width: "450px", 
        margin: "auto",
    }

    const inputDataDivStyle = {
        borderRadius: "5px",
        backgroundColor: "#f2f2f2",
        border: "1px solid darkgrey",
        padding: "0px 10px",
        margin: "5px",
    }

  // The return can only return a single React element, it does NOT
  //    have to be a div.  It can be a form or any other element.
    return (
        <div>
        <form style={{ marginTop: "20px" }}>
            <div style={inputDataDivStyle}>
                <label htmlFor="firstName">First Name</label>
                <input 
                    type="text" 
                    name="firstName"
                    onChange={handleFirstName}
                /> 
                {
                    firstNameError ?
                    <p>{ firstNameError }</p> :
                    ''
                }
            </div>
            <div style={inputDataDivStyle}>
                <label htmlFor="lastName">Last Name</label>
                <input 
                    type="text" 
                    name="lastName" 
                    onChange={handleLastName}
                />
                {
                    lastNameError ?
                    <p>{ lastNameError }</p> :
                    ''
                }
            </div>
            <div style={inputDataDivStyle}>
                <label htmlFor="email">Email</label>
                <input 
                    type="text" 
                    name="email" 
                    onChange={handleEmail}
                />
                {
                    emailError ?
                    <p>{ emailError }</p> :
                    ''
                }
            </div>
            <div style={inputDataDivStyle}>
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    name="password" 
                    onChange={handlePassword}
                />
                {
                    passwordError ?
                    <p>{ passwordError }</p> :
                    ''
                }
            </div>
            <div style={inputDataDivStyle}>
                <label htmlFor="confirmPassord">Confirm Password</label>
                <input 
                    type="password" 
                    name="confirmPassword" 
                    onChange={handleConfirmPassword}
                />
                {
                    confirmPasswordError ?
                    <p>{ confirmPasswordError }</p> :
                    ''
                }
            </div>
        </form>

        <div style={ formDataDivStyle }>
            <h3 style={{ textAlign: 'center' }}>Your Form Data</h3>
            <p>
            <label>First Name: </label>{ firstName }
            </p>
            <p>
            <label>Last Name: </label>{ lastName }
            </p>
            <p>
            <label>Email: </label>{ email }
            </p>
            <p>
            <label>Password: </label>{ password }
            </p>
            <p>
            <label>Confirm Password: </label>{ confirmPassword }
            </p>
        </div>
        </div>
    )
}

export default Form;