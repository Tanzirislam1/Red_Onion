import React from 'react';
import './ChooseUsCard.css';

const ChooseUsCard = ({ chooseUsCard }) => {
    const {id, img, title, description} = chooseUsCard || {};
    return (
        <div className='container'>
            <div className="card">
                <img className='card-img' src={img} alt="" />
                <div className="card-body">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <button className='btn btn-primary'>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default ChooseUsCard;