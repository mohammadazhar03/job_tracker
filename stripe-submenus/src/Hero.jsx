import React from 'react'
import phoneImage from './images/phone.svg'
import {useGlobalContext} from './Context'

function Hero() {
const {closeSubmenu}=useGlobalContext();
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
        <div className="hero-center">
            <article className='hero-info'>
                <h1>I'M Mohammad Azhar</h1>
                    <p>This is my first website that i have build with react js </p>
                    <button className="btn">start now</button>
            </article>
            <article className="hero-images">
                <img src={phoneImage}
                className='hero-images'
                alt="hero" />
            </article>
        </div>
    </section>
)
}

export default Hero
