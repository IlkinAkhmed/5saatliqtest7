import React, { useContext } from 'react'
import style from "./index.module.scss"
import { NavLink, useNavigate } from "react-router-dom"
import { BasketContext } from '../../context/basket'
import { WishlistContext } from '../../context/wishlist'

function Navbar({ navIsOpen, setNavIsOpen }) {
    const { basket } = useContext(BasketContext)
    const { wishlist } = useContext(WishlistContext)
    const navigate = useNavigate()


    return (
        <nav>
            <div className={style.navInner}>
                <div className={style.logo}>
                    <h1>Selling<span style={{ color: "orangered", fontSize: "1.3em" }}>.</span></h1>
                </div>
                <ul className={style.texts}>
                    <li>
                        <NavLink to={'/'} className={style.navLink}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/about'} className={style.navLink}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/special'} className={style.navLink}>Special</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/add'} className={style.navLink}>AddPage</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/blog'} className={style.navLink}>Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/contact'} className={style.navLink}>Contact</NavLink>
                    </li>
                </ul>
                <div className={style.icons}>
                    <div className={style.message}>
                        <i onClick={() => navigate('/cart')} className='fa-solid fa-bag-shopping'></i>
                        <p>{basket.length}</p>
                    </div>
                    <div className={style.message}>
                        <i onClick={() => navigate('/wishlist')} className='fa-regular fa-heart'></i>
                        <p>{wishlist.length}</p>
                    </div>
                    <i onClick={() => setNavIsOpen(!navIsOpen)} className={`fa-solid fa-bars ${style.fa_bars}`}></i>
                </div>
            </div>
        </nav>
    )
}

export default Navbar