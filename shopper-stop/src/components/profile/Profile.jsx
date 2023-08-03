import React, { useContext, useEffect, useState } from 'react';
import './Profile.css'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/Auth.context';

const Profile = () => {

    const [userData, setUserData] = useState({});
    const {login} = useContext(AuthContext);
    const router = useNavigate();
    const [opendiv, setopendiv] = useState(false);

    
    const handlingForm = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("CurrentUser"))
        if (!currentUser) {
            router('/login')
        }
        const allUser = JSON.parse(localStorage.getItem("Users"))
        for (var i = 0; i < allUser.length; i++) {
            if (allUser[i].email == currentUser.email && allUser[i].password == currentUser.password) {
                setUserData(allUser[i])
            }
        }
    }, [])

    const formValidation =(event) => {
        event.preventDefault();
        const currentUser = JSON.parse(localStorage.getItem("CurrentUser"))
        const allUser = JSON.parse(localStorage.getItem("Users"))
        for (var i = 0; i < allUser.length; i++) {
            if(allUser[i].email == currentUser.email && allUser[i].password == currentUser.password){
                allUser[i].name = userData.name;
                allUser[i].password = userData.password;
                currentUser.name= userData.name;
                currentUser.password = userData.password; 
            }
        }
        login(currentUser)
        localStorage.setItem("Users",JSON.stringify(allUser));
        localStorage.setItem("Currentuser",JSON.stringify(currentUser));
        alert("profile updated");
        // setUserData({});
        setopendiv(false);
    }
 
    return (
        <div className='profile-body-css'>
            <div className='left-profile-div'>
                <div className='profile-heading-div'>
                    <div className="profile-left-heading-image">
                        <img src="https://prodstatic.shoppersstop.com/_ui/responsive/common/assets/images/iconmyprofile.svg" alt="" />

                    </div>
                    <div className="profile-right-heading-info">
                        {userData && <div>
                            <p>Name : {userData.name}</p>
                            <p>Email : {userData.email}</p>
                        </div>}
                    </div>
                </div>
                <div className='profile-offer-div'>
                    <p>My Offers</p>
                </div>
                <div className='profile-offer-div'>
                    <p>My first citizen point</p>
                </div>
                <div className='profile-offer-div'>
                    <p>My Wallet</p>
                </div>
                <div className='profile-offer-div'>
                    <p>My Transaction</p>
                </div>
                <div className='profile-offer-div'>
                    <p>My Wardrope</p>
                </div>
                <div className='profile-offer-div'>
                    <p>My Address Book</p>
                </div>
                <div className='profile-offer-div'>
                    <p>Logout</p>
                </div>
            </div>
            <div className="right-profile-div">
                <div>
                    <h2 style={{ marginBottom: "2%" }}>PERSONAL INFORMATION</h2>
                    <div className='profile-personal-information-div'>
                        <p className='profile-span-width'>Name</p>
                        {userData && <p style={{ color: "#666" }}>{userData.name}</p>}
                    </div>
                    <div className='profile-personal-information-div'>
                        <p className='profile-span-width'>Email</p>
                        {userData && <p style={{ color: "#666" }}>{userData.email}</p>}
                    </div>
                    <button className='update-profile-button' onClick={() => setopendiv(true)}>Update Profile</button>

                    {opendiv && <div className='profile-modal-div-css'>
                        <div className='inner-profile-modal-div-css'>
                            <div className='login-form-div-css'>
                                <form onSubmit={formValidation}>
                                    <input type="text" className='login-form-input-css' value={userData.name}  name='name' onChange={handlingForm} /><br />
                                    <input type="text" className='login-form-input-css' value={userData.password} name='password' onChange={handlingForm} /><br />
                                    <input type="submit" className='login-form-submit-button-css' value="update" />
                                </form>
                            </div>
                        </div>
                    </div>
                    }

                </div>
            </div>
        </div>
    )
}

export default Profile
