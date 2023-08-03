import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './MultipleProduct.css'

const MultipleProduct = () => {

    const [products, setProducts] = useState([]);
    const router = useNavigate();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    }, [])

    const redirect = (id) => {
        router(`/single-product/${id}`)
    }

    return (
        <div className='multiple-product-main-div'>
            <div className="multiple-product-left-div">
                <div className='multiple-product-filter-div'>
                    <div className='multiple-product-filter-category-div'>
                        <p>Categories</p>
                    </div>
                    <div className="multiple-product-filter-sub-category-div">
                        <input type="checkbox" name="" id="" />
                        <span>Accessories</span>
                    </div>
                    <div className="multiple-product-filter-sub-category-div">
                        <input type="checkbox" name="" id="" />
                        <span>Jacket</span>
                    </div>
                    <div className="multiple-product-filter-sub-category-div">
                        <input type="checkbox" name="" id="" />
                        <span>Shirt</span>
                    </div>
                    <div className="multiple-product-filter-sub-category-div">
                        <input type="checkbox" name="" id="" />
                        <span>Jeans</span>
                    </div>
                    <div className="multiple-product-filter-sub-category-div">
                        <input type="checkbox" name="" id="" />
                        <span>T-shirt</span>
                    </div>
                </div>

                <div className='multiple-product-filter-div'>
                    <div className='multiple-product-filter-category-div'>
                        <p>Brands</p>
                    </div>
                    <div className="multiple-product-filter-sub-category-div">
                        <input type="checkbox" name="" id="" />
                        <span>Wrogn</span>
                    </div>
                    <div className="multiple-product-filter-sub-category-div">
                        <input type="checkbox" name="" id="" />
                        <span>Jack & Jones</span>
                    </div>
                    <div className="multiple-product-filter-sub-category-div">
                        <input type="checkbox" name="" id="" />
                        <span>Puma</span>
                    </div>
                    <div className="multiple-product-filter-sub-category-div">
                        <input type="checkbox" name="" id="" />
                        <span>Addidas</span>
                    </div>
                    <div className="multiple-product-filter-sub-category-div">
                        <input type="checkbox" name="" id="" />
                        <span>Being Human</span>
                    </div>
                </div>

                <div className='multiple-product-filter-div'>
                    <div className='multiple-product-filter-category-div'>
                        <p>Prices</p>
                    </div>
                    <div className="multiple-product-filter-sub-category-div">
                        <input type="checkbox" name="" id="" />
                        <span>200 - 500</span>
                    </div>
                    <div className="multiple-product-filter-sub-category-div">
                        <input type="checkbox" name="" id="" />
                        <span>501 - 1000</span>
                    </div>
                    <div className="multiple-product-filter-sub-category-div">
                        <input type="checkbox" name="" id="" />
                        <span>1001 - 3000</span>
                    </div>
                    <div className="multiple-product-filter-sub-category-div">
                        <input type="checkbox" name="" id="" />
                        <span>3001 - 5001</span>
                    </div>
                    <div className="multiple-product-filter-sub-category-div">
                        <input type="checkbox" name="" id="" />
                        <span>5001 - 10000</span>
                    </div>
                </div>
            </div>
            <div className="multiple-product-right-div">
                <div className='specific-product-div'>{products.length && products.map((product) => (
                    <div className='specific-product-div-size' onClick={()=>redirect(product.id)}>
                        <img src={product.image} alt="" />
                        <h4>Name : {product.title}</h4>
                        <h4>Price : {product.price}</h4>
                    </div>
                ))}
                </div>
            </div>

        </div>
    )
}

export default MultipleProduct
