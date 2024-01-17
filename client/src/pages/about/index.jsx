import React from 'react'
import style from "./index.module.scss"
import { Helmet } from 'react-helmet-async'

function About() {
    return (
        <div>

            <Helmet>
                <title>
                    Home | About
                </title>
            </Helmet>
            About
        </div>
    )
}

export default About