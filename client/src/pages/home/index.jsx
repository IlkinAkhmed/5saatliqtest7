import React from 'react'
import style from "./index.module.scss"
import { Helmet } from 'react-helmet-async'
import AboutUs from '../../components/aboutUs'
import Header from '../../components/header'
import Products from '../../components/products'
import LeaderShip from '../../components/leaderShip'
import Services from '../../components/services'

function Home() {
    return (
        <>
            <Helmet>
                <title>
                    Home
                </title>
            </Helmet>
            <Header />
            <Products />
            <AboutUs />
            <LeaderShip />
            <Services />

        </>
    )
}

export default Home