import React from 'react';
import notfound from '../../images/not-found.png';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <img className='not-found-img' src={notfound} alt="" />
        </div>
    );
};

export default NotFound;