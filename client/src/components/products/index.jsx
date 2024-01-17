import React, { useContext, useEffect, useState } from 'react'
import "./index.scss"
import axios from "axios"
import { BasketContext } from '../../context/basket'
import { useNavigate } from 'react-router-dom'
import Wishlist from '../../pages/wishlist'
import { WishlistContext } from '../../context/wishlist'

function Products() {

    const { basket, setBasket, addToCart } = useContext(BasketContext)
    const { wishlist, addToWishlist } = useContext(WishlistContext)

    const navigate = useNavigate()

    const [allData, setAllData] = useState(null)
    const [isLoadiong, setIsLoadiong] = useState(true)

    async function fetchData() {
        const res = await axios.get('http://localhost:3800/products/')
        setAllData(res.data)
        setIsLoadiong(false)
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <section className='products'>
            <div className='head'>
                <p>POPULAR PRODUCTS</p>
                <h2>Our Products</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.</p>
            </div>
            <div className='wrapper'>
                {isLoadiong ? <h1>Loading...</h1> :
                    allData && allData.map(item => (
                        <div className='card'>
                            <div className='img'>
                                <img src={item.image} alt="" />
                            </div>
                            <div className='texts'>
                                <h3>{item.title}</h3>
                                <p>Price: <span style={{ color: "orangered" }}>${item.price}.00</span> </p>
                                <div className='rating'>
                                    <div className="rate">
                                        <i className='fa-solid fa-star'></i>
                                        <span>{item.star}</span>
                                    </div>

                                    <div className="rate">
                                        <i className='fa-solid fa-heart'></i>
                                        <span>{item.like}</span>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                                <div className="p-add">
                                    <button className='cart' onClick={() => addToCart(item)} style={{ backgroundColor: 'white' }}>CART</button>
                                    <button onClick={() => navigate(`/details/${item._id}`)} className='view' style={{ backgroundColor: 'black', color: "white" }}>VIEW</button>
                                </div>
                                <button onClick={() => addToWishlist(item)} className='wish'>
                                    {wishlist.find(x=>x._id===item._id) ? 'In Wishlist' : "Wishlist" }
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Products