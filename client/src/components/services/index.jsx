import React from 'react'
import "./index.scss"
import { Link } from 'react-router-dom'

function Services() {
    return (
        <section className='services'>
            <div className="services-head">
                <p>OUR SERVICES</p>
                <h2>We Offer Services</h2>
            </div>
            <div className="services-wrapper">
                <div className="ser-card">
                    <div className="ser-img">
                        <i className='fa-solid fa-basketball'></i>
                    </div>
                    <div className="ser-texts">
                        <p style={{ fontSize: "1.2em" }}>Business Consulting</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                        <Link style={{ color: "orangered" }}>Learn More</Link>
                    </div>
                </div>
                <div className="ser-card">
                    <div className="ser-img">
                        <i class="fa-solid fa-delete-left"></i>
                    </div>
                    <div className="ser-texts">
                        <p style={{ fontSize: "1.2em" }}>
                            Market Analysis</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                        <Link style={{ color: "orangered" }}>Learn More</Link>
                    </div>
                </div>
                <div className="ser-card">
                    <div className="ser-img">
                        <i class="fa-regular fa-clock"></i>
                    </div>
                    <div className="ser-texts">
                        <p style={{ fontSize: "1.2em" }}>Business Consulting</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                        <Link style={{ color: "orangered" }}>Learn More</Link>
                    </div>
                </div>
                <div className="ser-card">
                    <div className="ser-img">
                        <i class="fa-solid fa-briefcase"></i>
                    </div>
                    <div className="ser-texts">
                        <p style={{ fontSize: "1.2em" }}>Business Consulting</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                        <Link style={{ color: "orangered" }}>Learn More</Link>
                    </div>
                </div>
                <div className="ser-card">
                    <div className="ser-img">
                        <i class="fa-regular fa-clock"></i>
                    </div>
                    <div className="ser-texts">
                        <p style={{ fontSize: "1.2em" }}>Business Consulting</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                        <Link style={{ color: "orangered" }}>Learn More</Link>
                    </div>
                </div>
                <div className="ser-card">
                    <div className="ser-img">
                        <i class="fa-solid fa-delete-left"></i>
                    </div>
                    <div className="ser-texts">
                        <p style={{ fontSize: "1.2em" }}>Business Consulting</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                        <Link style={{ color: "orangered" }}>Learn More</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services