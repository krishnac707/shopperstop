import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Cart.css'

const Cart = () => {

    const [usercart, setUsercart] = useState([]);
    const [finalPrice, setFinalPrice] = useState();
    const router = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("CurrentUser"));
        if (user?.email) {
            const allUser = JSON.parse(localStorage.getItem("Users"));
            for (var i = 0; i < allUser.length; i++) {
                if (allUser[i].email == user.email && allUser[i].password == user.password) {
                    setUsercart(allUser[i].cart);
                    break;
                }
            }
        }
        else {
            alert("Please Login first to add product");
            router("/login");
        }
    }, [])

    useEffect(() => {
        var totalPrice = 0;
        var deliveryamt = 149;
        if (usercart?.length) {
            usercart.map(singleProduct => (totalPrice += singleProduct.price))
            setFinalPrice(Math.trunc(totalPrice)+deliveryamt);
        }

    }, [usercart])


    const buyProduct = () => {
        const user = JSON.parse(localStorage.getItem("CurrentUser"));
        if (usercart.length) {
            if (user?.email) {
                const allUser = JSON.parse(localStorage.getItem("Users"));
                for (var i = 0; i < allUser.length; i++) {
                    if (allUser[i].email == user.email && allUser[i].password == user.password) {
                        allUser[i].cart = [];
                        localStorage.setItem("Users", JSON.stringify(allUser));
                        break;
                    }
                }
                setFinalPrice(0);
                setUsercart([]);
                return alert("Product will delivered Soon!!!")
            }
        }
        else {
            alert("please add product first")
        }
    }

    const removeProduct = (id) => {
        const user = JSON.parse(localStorage.getItem("CurrentUser"));
        var removeItem;
        if (user?.email) {
            const allUser = JSON.parse(localStorage.getItem("Users"));
            for (var i = 0; i < allUser.length; i++) {
                if (allUser[i].email == user.email && allUser[i].password == user.password) {
                    removeItem = usercart.filter((item) => item.id !== id);
                    allUser[i].cart = removeItem;
                    localStorage.setItem("Users", JSON.stringify(allUser));
                    break;
                }
            }
        }
        setFinalPrice(0);
        setUsercart(removeItem);
    }

    return (
        <div className='cart-heading'>
            <h4 className='cart-heading-div'>10% Instant Discount on Select HDFC Bank Credit Card on minimum purchase of Rs.6000. (Maximum Discount of Rs. 800) TnC Apply</h4>
            <div className="cart-whole-div">
                <div className='inside-cart-div'>
                    <div className='cart-discount-image'>
                        <img src="https://sslimages.shoppersstop.com/sys-master/root/h06/hee/30234028605470/SAVE23-Coupon-Code-1840x250-Web----new-code--2023-06--22--cart-page.jpg" alt="" />
                    </div>
                    {
                        usercart?.length ? <div className='cart-outside-css'>
                            {usercart.map((cartProduct) => (
                                <div className='cart-product-css'>
                                    <div className='cart-product-image-css'>
                                        <img src={cartProduct.image} alt="" />
                                    </div>
                                    <div className='right-cart-product-info-div'>
                                        <h3>{cartProduct.title}</h3>
                                        <h3>Price : {cartProduct.price} RS</h3>
                                        <button className='remove-product-button-css'  onClick={() => removeProduct(cartProduct.id)}>Remove Product</button>
                                    </div>
                                </div>
                            ))
                            }
                        </div>
                            : <h1>No Product in the cart</h1>
                    }
                </div>
                <div className="right-cart-div">
                    <h2 style={{marginBottom:"3%"}}>Order Summary</h2>
                    <div className='subtotal-css'>
                        <h3>Sub total :</h3>
                        <h3>{usercart.map((cartProduct) => (cartProduct.price))} Rs</h3>
                    </div>
                    <div className='subtotal-css'>
                        <h3>Delivery Charges :</h3>
                        <h3>149 Rs</h3>
                    </div>
                    <div className='subtotal-css'>
                        <h3>Offer Discount :</h3>
                        <h3>{finalPrice + finalPrice}</h3>
                    </div>
                    <div className='subtotal-css'>
                        <h3>Total Amount :</h3>
                        <h3>{finalPrice}</h3>
                    </div>
                    <button onClick={buyProduct} className='login-form-submit-button-css' style={{marginTop:"6%"}}>Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default Cart