import React from 'react';
import { Link } from 'react-router-dom';
import LunchItem from '../../../../Components/Home/menu/Lunch/LunchItem/LunchItem';
import './Lunch.css';

const Lunch = () => {
    const lunchItems = [
        {
            id: 1,
            img: "https://i.ibb.co/FqgT4kR/lunch1.png",
            name: "Beef Stick",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni ad praesentium voluptatibus repellat ab, consectetur sed qui dignissimos delectus esse.",
            price: "50"
        },

        {
            id: 2,
            img: "https://i.ibb.co/VBGyCKv/lunch2.png",
            name: "Honey Soy Glazed Salmon with Peppers",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni ad praesentium voluptatibus..",
            price: "60"
        },

        {
            id: 3,
            img: "https://i.ibb.co/sQYkVYr/lunch3.png",
            name: "Tarragon Rubbed Salmon",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni ad praesentium voluptatibus repellat ab, consectetur sed qui dignissimos delectus esse.",
            price: "80"
        },

        {
            id: 4,
            img: "https://i.ibb.co/k6Mk55r/lunch4.png",
            name: "Indian Lunch",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni ad praesentium voluptatibus repellat ab, consectetur sed qui dignissimos delectus esse.",
            price: "100"
        },

        {
            id: 5,
            img: "https://i.ibb.co/BGBpWV9/lunch5.png",
            name: "Fried Chicken Bento",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni ad praesentium voluptatibus repellat ab, consectetur sed qui dignissimos delectus esse.",
            price: "120"
        },

        {
            id: 6,
            img: "https://i.ibb.co/qpXkssx/lunch6.png",
            name: "Healthy Meal plan",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni ad praesentium voluptatibus repellat ab, consectetur sed qui dignissimos delectus esse.",
            price: "150"
        }
    ];
    // console.log(lunchItems);

    if (lunchItems.length) {
        lunchItems.length = 3;
    }

    return (
        <div className='container'>
            <h2 className='mt-5 text-center'>Our Lunch items : {lunchItems.length}</h2>
            <div id='lunch-section'>
                <div className="lunch-container">
                    {
                        lunchItems.map(item => <LunchItem key={item.id} item={item}></LunchItem>)
                    }
                </div>

                <div className='allitem-button'>
                    <Link className='text-center all-services-btn' to="/services">All Items</Link>
                </div>
            </div>
        </div>
    );
};

export default Lunch;