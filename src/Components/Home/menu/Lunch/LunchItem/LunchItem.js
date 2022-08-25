import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LunchItem.css';

const LunchItem = ({ item }) => {
    const { id, img, name, description, price } = item || {};
    console.log(item);

    const navigate = useNavigate();

    const handleLunchId = () => {
        navigate(`/serviceItem/${id}`);
        // console.log('hello', id);
    }
    
    return (
        <div>
            <div className="lunch-card shadow-lg border-none">
                <img src={img} className="card-img-top" alt="" />
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className="card-text">{description}</p>
                    <h3 className='mt-2'>price: <small>${price}</small></h3>
                    <button className='btn btn-primary mt-4' onClick={handleLunchId}>Learn more</button>
                </div>
            </div>
        </div>
    );
};

export default LunchItem;