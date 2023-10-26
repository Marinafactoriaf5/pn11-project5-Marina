import React from 'react';
import './styles.css';
import heroLogo from '../assets/Rectangle 4.png'

function Hero() {
    return (
        <div>
            <h1><i>WINTER IS ON <br/> ITS WAY</i></h1>
            <h2 class="buyMore">Buy more, Save more</h2>
            
            <img class="hero" src={heroLogo} alt="Chico montaña" />
        </div>
    )
}

export default Hero;