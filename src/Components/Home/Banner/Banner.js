import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='hero-background'>
            <div className="container text-center">
                <h2 className="banner-title">Delicious Foods</h2>
                <h3 className="banner-subtitle text-white">Best Food Waiting For Your Belly</h3>
                <p></p>
                <button className='hero-btn'>Explore more</button>
            </div>
        </div>
    );
};

export default Banner;