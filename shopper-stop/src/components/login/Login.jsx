import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './../../context/Auth.context';
import { useNavigate } from 'react-router-dom';
import './Login.css'
import { DataContext } from '../../context/Data.context';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Login = () => {
  const {setLoginSignup, setLoginButton,loginbutton,loginSignup} = useContext(DataContext);

  const [userData, setUserData] = useState({ email: "", password: "" });
  const { state, dispatch } = useContext(AuthContext);
  console.log(state);
  const router = useNavigate();


  const formValue = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  }

  const formSubmit = async (event) => {
    event.preventDefault();
    if (userData.email && userData.password) {
      const response = await axios.post("http://localhost:8007/login", { userData })
      if (response.data.success) {
        dispatch({
          type:"LOGIN",
          payload:response.data.user
        })
        localStorage.setItem("shopperstopToken",JSON.stringify(response.data.token))
        setUserData({ email: "", password: "" })
        router("/");
        setLoginButton(false)
        toast.success(response.data.message);
      }
      else {
        toast.error(response.data.message)
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
    setLoginButton(false);
    setLoginSignup(true);
  }

  return loginbutton && 
    <div id='login-div-css'>
      <div className='inner-login-div-css'>
        <div className='inner-login-heading-div-css'>
          <div className='inner-login-button-div-css'>
            <button className='inner-login-button-css' onClick={() => setLoginButton(false)}>skip</button>
          </div>
          <h1>Login</h1>
          <p>For a tailor Experenced</p>
        </div>

        <div className='login-form-div-css'>
          <form onSubmit={formSubmit}>
            <input type="email" className='login-form-input-css' name='email' onChange={formValue} placeholder='Enter Email' /><br />
            <input type="password" className='login-form-input-css' name='password' onChange={formValue} placeholder='Enter Password' /><br />
            <input type="submit" className='login-form-submit-button-css' value="Submit" />
          </form>
          <div>
            <h5>If you Don't have Account then <span><button className='login-form-signup-button-css' onClick={handleSignup}>Sign up from here</button></span>  </h5>
          </div>
        </div>
      </div>
    </div>
}

export default Login