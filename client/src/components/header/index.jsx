import React from 'react'
import style from "./index.module.scss"

function Header() {
    return (
        <header>
            <div className={style.inner}>
                <h1>Shop With Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus neque porro quae aut ea ex?</p>
                <div>
                    <button className={style.transparent}>SHOP NOW</button>
                    <button className={style.white}>CLUB MEMBERSHIP</button>
                </div>
            </div>
        </header>
    )
}

export default Header