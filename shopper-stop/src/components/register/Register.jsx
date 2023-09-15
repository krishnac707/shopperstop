import React, { useContext, useEffect, useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../context/Data.context';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../context/Auth.context';

const Register = () => {
    const { setLoginSignup, setLoginButton, loginSignup } = useContext(DataContext);
    // const [dropdownmenu,setdropdownmenu] = useState(false);
    const [userData, setUserData] = useState({ name: "", email: "", password: "",confirmPassword:"", role: 'Buyer' });
    const {state} = useContext(AuthContext)
    const router = useNavigate();

    const formValue = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
    }

    const selectRole = (event) => {
        setUserData({ ...userData, ["role"]: event.target.value })
    }

    const formSubmit = async (event) => {
        event.preventDefault();
        if (userData.name && userData.email && userData.password && userData.confirmPassword && userData.role) {
            if (userData.password === userData.confirmPassword) {
                const response = await axios.post("http://localhost:8007/register", { userData })
                if (response.data.success) {
                    setUserData({ name: "", email: "", password: "", confirmPassword: "", role: "Buyer" })
                    router("/login");
                    toast.success(response.data.message);
                    setLoginSignup(false);
                    setLoginButton(true);

                }
                else {
                    toast.error(response.data.message)
                }
            }
            else {
                toast.error("Password and confirm password is not matched")
            }
        }
        else {
            toast.error("All fields are mandatory")
        }
    }

    useEffect(() => {
        if (state?.user?.name) {
            router('/')
        }
    }, [state])

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
                        <input type="password" className='login-form-input-css' name='confirmPassword' onChange={formValue} placeholder='Confirm Password' /><br />
                        <select className='form-select-css' onChange={selectRole}>
                            <option value="Buyer">Buyer</option>
                            <option value="Seller">Seller</option>
                        </select>
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