import React from 'react'
import { NavLink } from "react-router-dom"
import "./index.scss"

function MobileNav({ navIsOpen, setNavIsOpen }) {
    return (
        <div className={`mobile-nav ${navIsOpen ? 'active' : ''}`}>
            <i onClick={() => setNavIsOpen(!navIsOpen)} className='fa-solid fa-xmark'></i>
            <ul className='nav-inner'>
                <li>
                    <NavLink to={'/'} className='nav-link'>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/about'} className='nav-link'>About</NavLink>
                </li>
                <li>
                    <NavLink to={'/special'} className='nav-link'>Special</NavLink>
                </li>
                <li>
                    <NavLink to={'/add'} className='nav-link'>AddPage</NavLink>
                </li>
                <li>
                    <NavLink to={'/blog'} className='nav-link'>Blog</NavLink>
                </li>
                <li>
                    <NavLink to={'/contact'} className='nav-link'>Contact</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default MobileNav