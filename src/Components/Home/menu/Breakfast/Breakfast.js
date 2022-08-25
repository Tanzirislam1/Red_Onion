import React from 'react';
import { Link } from 'react-router-dom';
import BreakfastItem from '../../../../Components/Home/menu/Breakfast/BreakfastItem/BreakfastItem';
import './Breakfast.css';

const Breakfast = () => {

    const breakfastItems = [
        {
            id: 1,
            img: "https://i.ibb.co/1GwZT5G/breakfast1.png",
            name: "Eggs Benedict",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni ad praesentium voluptatibus repellat ab, consectetur sed qui dignissimos delectus esse.",
            price: "50"
        },

        {
            id: 2,
            img: "https://i.ibb.co/gr6nD46/breakfast2.png",
            name: "Breakfast Sandwich",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni ad praesentium voluptatibus repellat ab, consectetur sed qui dignissimos delectus esse.",
            price: "60"
        },

        {
            id: 3,
            img: "https://i.ibb.co/Lv8thFw/breakfast3.png",
            name: "Baked Chicken",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni ad praesentium voluptatibus repellat ab, consectetur sed qui dignissimos delectus esse.",
            price: "80"
        },

        {
            id: 4,
            img: "https://i.ibb.co/fnFGdFC/breakfast4.png",
            name: "Bagel and Cream Cheese",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni ad praesentium voluptatibus repellat ab, consectetur sed qui dignissimos delectus esse.",
            price: "100"
        },

        {
            id: 5,
            img: "https://i.ibb.co/BC2zCxG/breakfast5.png",
            name: "Full Breakfast Fried Egg Toast Brunch",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni ad praesentium voluptatibus repellat ab, consectetur sed qui dignissimos delectus esse.",
            price: "120"
        },

        {
            id: 6,
            img: "https://i.ibb.co/Sy885zh/breakfast6.png",
            name: "Toast Croissant Fried Egg",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni ad praesentium voluptatibus repellat ab, consectetur sed qui dignissimos delectus esse.",
            price: "150"
        }
    ];
    // console.log(breakfastItems);

    // slice length 
    if (breakfastItems?.length) {
        breakfastItems.length = 3;
    }

    return (
        <div id='breakfast-section'>
            <h2 className='mt-5 text-center'>Breakfast items : {breakfastItems.length}</h2>
            <div className='breakfast-container'>
                {
                    breakfastItems.map(item => <BreakfastItem key={item.id} item={item}></BreakfastItem>)
                }


            </div>

            <div className='allitem-button'>
                <Link className='text-center all-services-btn' to="/services">All Items</Link>
            </div>
        </div>
    );
};

export default Breakfast;