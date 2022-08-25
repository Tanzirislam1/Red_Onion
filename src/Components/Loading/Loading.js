import React from 'react';
import loadingGif from '../../images/loading-yellow.gif';
import './Loading.css';

const Loading = () => {
    return (
        <div>
            <img className='loading-gif' src={loadingGif} alt="" />
        </div>
    );
};

export default Loading;