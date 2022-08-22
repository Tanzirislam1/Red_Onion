import React from 'react';
import { useParams } from 'react-router-dom';
import './Services.css';

const Services = ({ item }) => {
    const { serviceId } = useParams();
    console.log(item);
    return (
        <div className='container services'>
            <h2 className='text-center services-title'>Our services</h2>
            <h3 className='text-center font-bold'>{serviceId}</h3>
        </div>
    );
};

export default Services;