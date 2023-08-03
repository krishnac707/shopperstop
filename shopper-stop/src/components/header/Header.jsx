import React, { useContext, useEffect, useState } from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faHeart, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Login from './../login/Login';
import Register from '../register/Register';
import { DataContext } from '../../context/Data.context';
import { AuthContext } from '../../context/Auth.context';
import DropdownList from '../dropdown-comp/DropdownList';

const Header = () => {
    const { setLoginButton, setLoginSignup, loginbutton, loginSignup } = useContext(DataContext);
    const {state,logout} = useContext(AuthContext);
    const [dropdownMenu,setDropdownMenu] = useState(false);
    const router = useNavigate();
    const [user, setUser] = useState({});

    useEffect(() => {
        if (state?.user) {
            setUser(state?.user)
        }
        else{
            setUser({});
        }
    },[state])

    const handleUser = () => {
        if(user?.email){
            setDropdownMenu(true)
            setLoginButton(false)
        }
        else{
            setLoginButton(true)
            setDropdownMenu(false)
        }
    }

    return (
        <>
            <div id='main-header'>
                <div className='header-body'>
                    <div className='header-help-support'>
                        <p>First Citizen Club</p>
                        <p>All Stores</p>
                        <p onClick={()=>router('/profile')} style={{cursor:"pointer"}}>Profile</p>
                    </div>
                    <div className='header-shopper-stop'>
                        <img src="https://prodstatic.shoppersstop.com/_ui/updated_path/images/shopperstopimgaes_web/newLogo.svg" className='shopper-stop-image' alt="" />
                    </div>
                    <div className='header-search'>
                        <input type="text" className='header-search-input' placeholder='Search Product and Brand' />
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='magnify-glass' />

                    </div>
                    <div className='header-icons'>
                        <div ><FontAwesomeIcon icon={faHeart} /></div>
                        <div onClick={()=>router('cart')}><FontAwesomeIcon icon={faCartShopping} /></div>
                        <div onClick={handleUser} className='cursor-pointer-css'><FontAwesomeIcon icon={faUser} /></div>
                        {user.email && <div onClick={logout}><h5 style={{cursor:"pointer"}}>Logout</h5></div>}
                    </div>
                </div>
                <div className="header-second-menu">
                    <div><h3 className='header-categories-css'>CATEGORIES</h3></div>
                    <div><h2 className='header-luxe-css'>LUXE</h2></div>
                    <div><h3>BARGAINS</h3></div>
                    <div><h3>STYLE HUB</h3></div>
                </div>

                <div className="header-third-menu-width">
                    <div className="header-third-menu">
                        <div onClick={()=> router('/all-products')}><h4>MEN</h4></div>
                        <div><h4>WOMEN</h4></div>
                        <div><h4>WATCHES</h4></div>
                        <div><h4>BEAUTY</h4></div>
                        <div><h4>KIDS</h4></div>
                        <div><h4>HOMESTOPS</h4></div>
                        <div><h4>GIFTS</h4></div>
                        <div><h4>BRANDS</h4></div>

                    </div>
                </div>
            </div>
            <Login />
            <Register />
            <DropdownList />
        </>
    )
}

export default Header