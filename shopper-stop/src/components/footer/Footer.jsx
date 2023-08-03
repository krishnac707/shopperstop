import React from 'react';
import './Footer.css';
import footerimage from './images/footer-icon.jpg'


const Footer = () => {
  return (
    <div className='footer-body'>
        <div className='footer-all-image-css'>
            <img src={footerimage} alt="" />
        </div>
        <div className='footer-text-div-css'>
            <div className='footer-content-css'>
                <h5>CUSTOMER</h5>
                <div className='footer-border-div-css'></div>
                <div className='footer-para-css'>
                <p>HELP</p>
                <p>TRACK ORDER</p>
                <p>SIZE GUIDE</p>
                <p>HOW DO I SHOP?</p>
                <p>HOW DO I PAY?</p>
                <p>FIND PLACES WE DELIVER</p>
                <p>STYLE HUB</p>
                </div>
            </div>

            <div className='footer-content-css'>
                <h5>STORE AND SITES</h5>
                <div className='footer-border-div-css'></div>
                <div className='footer-para-css'>
                <p>ABOUT US</p>
                <p>CONTACT US</p>
                <p>CORPORATE SITE</p>
                <p>STORE LOCATOR</p>
                <p>CAREERS</p>
                <p>SITEMAP</p>
                </div>
            </div>

            <div className='footer-content-css'>
                <h5>POLICIES</h5>
                <div className='footer-border-div-css'></div>
                <div className='footer-para-css'>
                <p>TERMS OF USE</p>
                <p>PRIVACY</p>
                <p>DELIVERY POLICY</p>
                <p>EXCHANGES & RETURNS</p>
                </div>
            </div>

            <div className='footer-content-css'>
                <h5>FIRST CITIZEN</h5>
                <div className='footer-border-div-css'></div>
                <div className='footer-para-css'>
                <p>FIRST CITIZEN CLUB</p>
                </div>
            </div>

            <div className='footer-content-css'>
                <h5>DELIGHTFUL PROGRAMS</h5>
                <div className='footer-border-div-css'></div>
                <div className='footer-para-css'>
                <p>INSTANT GIFTING</p>
                <p>EXPRESS STORE PICK UP</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer