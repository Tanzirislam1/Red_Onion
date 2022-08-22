import React from 'react';
import Banner from '../Banner/Banner';
import Foods from '../Foods/Foods';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='foods-container'>
                <Foods></Foods>
            </div>
        </div>
    );
};

export default Home;