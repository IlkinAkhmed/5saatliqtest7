import React from 'react'
import style from "./index.module.scss"
import { Helmet } from 'react-helmet-async'

function Blog() {
    return (
        <div>

            <Helmet>
                <title>
                    Home | Blog
                </title>
            </Helmet>
            Blog
        </div>
    )
}

export default Blog