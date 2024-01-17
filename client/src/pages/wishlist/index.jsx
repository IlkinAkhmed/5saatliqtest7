import React, { useContext } from 'react'
import "./index.scss"
import { Helmet } from 'react-helmet-async'
import { WishlistContext } from '../../context/wishlist'
import { BasketContext } from '../../context/basket'
import { useNavigate } from 'react-router-dom'

function Wishlist() {
    const { wishlist, setWishlist } = useContext(WishlistContext)
    const { addToCart } = useContext(BasketContext)
    const navigate = useNavigate()


    return (
        <div>

            <Helmet>
                <title>
                    Home | Wishlist
                </title>
            </Helmet>
            <section className='products'>
                <div className='head'>
                    <h2>Your Favorites</h2>
                </div>
                <div className='wrapper'>
                    {wishlist && wishlist.map(item => (
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
                                <div className="basket-add">
                                    <button onClick={() => navigate(`/details/${item._id}`)} className='view' style={{ backgroundColor: 'black', color: "white" }}>VIEW</button>
                                    <button onClick={() => addToCart(item)}>CART</button>
                                </div>
                            </div>
                        </div>

                    ))
                    }
                </div>
            </section>
        </div>
    )
}

export default Wishlist