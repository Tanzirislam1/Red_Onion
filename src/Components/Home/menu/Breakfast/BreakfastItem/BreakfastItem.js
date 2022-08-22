import React from 'react';
import { useNavigate } from 'react-router-dom';
import Services from '../../../../../Components/Home/Services/Services';
import './BreakfastItem.css';

const BreakfastItem = ({ item }) => {
    const { id, img, name, description, price } = item || {};
    const navigate = useNavigate();

    const handleServiceId = () => {
        navigate(`/services/${id}`);
        // console.log('hello', id);
    }

    return (
        <div className='container'>
            <div className="breakfast-card shadow-lg border-none">
                <img src={img} className="card-img-top" alt="" />
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className="card-text">{description}</p>
                    <h3 className='mt-2'>price: <small>${price}</small></h3>
                    <button className='btn btn-primary' onClick={ handleServiceId}>Learn more</button>
                </div>
            </div>
        </div>
    );
};

export default BreakfastItem;