import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { BasketContext } from '../../context/basket'
import "./index.scss"
import { useNavigate } from 'react-router-dom'
import { WishlistContext } from '../../context/wishlist'

function Basket() {
    const navigate = useNavigate()
    const { basket, setBasket, modifyCount } = useContext(BasketContext)
    const { addToWishlist, wishlist } = useContext(WishlistContext)
    return (
        <>

            <Helmet>
                <title>
                    Home | Basket
                </title>
            </Helmet>

            <section className='products'>
                <div className='head'>
                    <h2>Your Basket</h2>
                </div>
                <div className='wrapper'>
                    {basket && basket.map(item => (
                        <div className='card'>
                            <div className='img'>
                                <img src={item.image} alt="" />
                            </div>
                            <div className='texts'>
                                <h3>{item.title}</h3>
                                <p>Price: <span style={{ color: "orangered" }}>${item.price}.00</span> </p>
                                <div className="counter">
                                    <p onClick={() => modifyCount(true, item)}>+</p>
                                    <span>{item.count}</span>
                                    <p onClick={() => modifyCount(false, item)}>-</p>
                                </div>
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
                                    <button onClick={() => addToWishlist(item)} className='wish'>
                                        {wishlist.find(x => x._id === item._id) ? 'In Wishlist' : "Wishlist"}
                                    </button>
                                </div>
                                <p>Total Price: <span style={{ color: "orangered" }}>${item.total}.00</span></p>
                            </div>
                        </div>

                    ))
                    }
                </div>
            </section>
        </>
    )
}

export default Basket