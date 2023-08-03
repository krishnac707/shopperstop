import React, { useContext, useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../context/Data.context';

const Register = () => {
    const { setLoginSignup, setLoginButton, loginbutton, loginSignup } = useContext(DataContext);
    const [dropdownmenu,setdropdownmenu] = useState(false);
    const [userData, setUserData] = useState({ name: "", email: "", password: "" });
    const router = useNavigate();

    const formValue = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
    }

    const formSubmit = (event) => {
        event.preventDefault();
        if (userData.name && userData.email && userData.password) {
            const user = JSON.parse(localStorage.getItem("Users")) || [];
            var userObj = {
                name: userData.name,
                email: userData.email,
                password: userData.password,
                cart:[]
            }
            user.push(userObj)
            localStorage.setItem("Users", JSON.stringify(user));
            alert("Register successfull");
            setLoginSignup(false);
        }
        else {
            alert("please fill all data");
        }
    }

    const handleSignup = () => {
        setLoginSignup(false);
        setLoginButton(true);
    }

    return loginSignup &&
        <div id='login-div-css' className='register-body'>
            <div className='inner-login-div-css'>
                <div className='inner-login-heading-div-css'>
                    <div className='inner-login-button-div-css'>
                        <button className='inner-login-button-css' onClick={() => setLoginSignup(false)}>skip</button>
                    </div>
                    <h1>Sign Up</h1>
                    <p>For a tailor Experenced</p>
                </div>
                <div className='login-form-div-css'>
                    <form onSubmit={formSubmit}>
                        <input type="text" className='login-form-input-css' name='name' onChange={formValue} placeholder='Enter Name' /><br />
                        <input type="email" className='login-form-input-css' name='email' onChange={formValue} placeholder='Enter Email' /><br />
                        <input type="password" className='login-form-input-css' name='password' onChange={formValue} placeholder='Enter Password' /><br />
                        <input type="submit" className='login-form-submit-button-css' value="Submit" />
                    </form>
                    <div>
                        <h5>Already have account then<span><button className='login-form-signup-button-css' onClick={handleSignup}>Sign in from here</button></span>  </h5>
                    </div>
                </div>
            </div>
        </div>

}

export default Register