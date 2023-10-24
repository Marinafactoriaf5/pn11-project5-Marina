import React from 'react';
import './styles.css';
import heroLogo from '../assets/Hero.jpeg'

function Hero() {
    return (
        <div>
            <img class="hero" src={heroLogo} alt="Chica en montaña" />
        </div>
    )
}

export default Hero;