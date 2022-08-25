import React from 'react';
import { useParams } from 'react-router-dom';
import './ServiceItem.css';

const ServiceItem = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2 className='service-item-title'>Service Details</h2>
            <h3 className='text-center font-bold'>{serviceId}</h3>
        </div>
    );
};

export default ServiceItem;