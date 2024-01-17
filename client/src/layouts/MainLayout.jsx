import React, { useState } from 'react'
import Navbar from './navbar'
import { Outlet } from 'react-router-dom'
import Footer from './footer'
import MobileNav from '../components/mobileNav'

function MainLayout() {
    const [navIsOpen, setNavIsOpen] = useState(false)
    return (
        <>
            <MobileNav navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
            <Navbar navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
            <Outlet />
            <Footer />
        </>
    )
}

export default MainLayout