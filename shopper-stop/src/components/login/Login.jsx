import React, { useContext, useState } from 'react';
import { AuthContext } from './../../context/Auth.context';
import { useNavigate } from 'react-router-dom';
import './Login.css'
import { DataContext } from '../../context/Data.context';

const Login = () => {
  const {setLoginSignup, setLoginButton,loginbutton,loginSignup} = useContext(DataContext);

  const [userdata, setuserdata] = useState({ email: "", password: "" });
  const { state, login } = useContext(AuthContext);
  console.log(state);
  const router = useNavigate();


  const formValue = (event) => {
    setuserdata({ ...userdata, [event.target.name]: event.target.value });
  }

  const formSubmit = (event) => {
    event.preventDefault();
    if (userdata.email && userdata.password) {
      const users = JSON.parse(localStorage.getItem("Users"));
      var flag = false
      for (var i = 0; i < users?.length; i++) {
        if (users[i].email == userdata.email && users[i].password == userdata.password) {
          flag = true
          login(users[i]);
          alert("login successfull");
          router('/all-products');
          setuserdata({ email: "", password: "" })
          setLoginButton(false)
          break;
        }
      }

      if (flag == false) {
        alert("Your email or password is incorrect");
      }
    }
    else {
      alert("Please fill all details");
    }
  }

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