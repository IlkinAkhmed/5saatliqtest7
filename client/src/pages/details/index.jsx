import React, { useContext, useEffect, useState } from 'react'
import "./index.scss"
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BasketContext } from '../../context/basket'
import { WishlistContext } from '../../context/wishlist'

function Details() {

    const { id } = useParams()

    const { addToCart } = useContext(BasketContext)
    const { addToWishlist, wishlist } = useContext(WishlistContext)

    const [product, setProduct] = useState([])

    async function fetchData() {
        const res = await axios.get(`http://localhost:3800/products/${id}`)
        setProduct(res.data)
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div>

            <Helmet>
                <title>
                    Home | Details
                </title>
            </Helmet>
            <div className="details">
                <div className="det-card">
                    <div className="det-img">
                        <img src={product.image} alt="" />
                    </div>
                    <div className="det-texts">
                        <h1>{product.title}</h1>
                        <p>{product.description}</p>
                        <p>Price: <span style={{ color: "orangered" }}>${product.price}.00</span></p>
                        <div className="det-rating">
                            <i style={{ color: "orangered" }} className='fa-solid fa-star'>{product.star}</i>
                            <i style={{ color: 'red' }} className='fa-solid fa-heart'>{product.like}</i>
                        </div>
                        <div className="buttons">
                            <button onClick={() => addToCart(product)}>CART</button>
                            <button onClick={() => addToWishlist(product)}>
                                {wishlist.find(x => x._id === product._id) ? 'In Wishlist' : "Wishlist"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details