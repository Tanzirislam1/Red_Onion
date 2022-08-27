import React from 'react';
import chooseUsImg1 from '../../../images/chooseUs-1.png';
import chooseUsImg2 from '../../../images/chooseUs-2.png';
import chooseUsImg3 from '../../../images/chooseUs-3.png';
import './ChooseUs.css';
import ChooseUsCard from './ChooseUsCard/ChooseUsCard';

const ChooseUs = () => {
    const whyChooseUsData = [
        {
            id: 1,
            img: chooseUsImg1,
            title: 'First Delivery',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta corporis harum expedita porro ex! Et nihil delectus pariatur dolores ipsam!'
        },

        {
            id: 2,
            img: chooseUsImg2,
            title: 'A Good Auto Responder',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta corporis harum expedita porro ex! Et nihil delectus pariatur dolores ipsam!'
        },

        {
            id: 3,
            img: chooseUsImg3,
            title: 'Home Delivery',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta corporis harum expedita porro ex! Et nihil delectus pariatur dolores ipsam!'
        }

    ];
    console.log(whyChooseUsData);
    return (
        <div className='container'>
            <h2 className='text-center'>Why You Choose Us</h2>
            <p className='chooseus-subtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta corporis harum expedita porro ex! Et nihil delectus pariatur dolores ipsam!</p>
            <div className='choose-us-card-container'>
                {whyChooseUsData.map(chooseUsCard => <ChooseUsCard key={chooseUsCard.id} chooseUsCard={chooseUsCard}></ChooseUsCard>)}
            </div>
        </div>
    );
};

export default ChooseUs;