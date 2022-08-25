import React from 'react';
import BreakfastItem from '../menu/Breakfast/BreakfastItem/BreakfastItem';
import DinnerItem from '../menu/Dinner/DinnerItem/DinnerItem';
import LunchItem from '../menu/Lunch/LunchItem/LunchItem';
import './Services.css';

const Services = () => {

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

    const dinnerItems = [
        {
            id: 1,
            img: "https://i.ibb.co/gJ2m1X8/dinner1.png",
            name: "Baked Chicken",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni ad praesentium voluptatibus repellat ab, consectetur sed qui dignissimos delectus esse.",
            price: "50"
        },

        {
            id: 2,
            img: "https://i.ibb.co/hXRwFNL/dinner2.png",
            name: "Lemony Salmon Piccata",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni ad praesentium voluptatibus..",
            price: "60"
        },

        {
            id: 3,
            img: "https://i.ibb.co/x8ZWPKR/dinner3.png",
            name: "Garlik Butter Baked Salmon",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni ad praesentium voluptatibus repellat ab, consectetur sed qui dignissimos delectus esse.",
            price: "80"
        },

        {
            id: 4,
            img: "https://i.ibb.co/MCrkt2Y/dinner4.png",
            name: "Fench Fries With Cheese",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni ad praesentium voluptatibus repellat ab, consectetur sed qui dignissimos delectus esse.",
            price: "100"
        },

        {
            id: 5,
            img: "https://i.ibb.co/LSVZRKZ/dinner5.png",
            name: "Pork Tenderloin with Quinoa Pilaf",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni ad praesentium voluptatibus repellat ab, consectetur sed qui dignissimos delectus esse.",
            price: "120"
        },

        {
            id: 6,
            img: "https://i.ibb.co/prf1KHn/dinner6.png",
            name: "Salmon With GrapeFruit and Lentin Salad",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni ad praesentium voluptatibus repellat ab, consectetur sed qui dignissimos delectus esse.",
            price: "150"
        }
    ];
    // console.log(dinnerItems);


    return (
        <div className='container'>
            <h2 className='text-center services-title'>Our Services</h2>

            <div id="breakfast-section">
                <h2 className='mt-5 text-center'>Our Breakfast items : {breakfastItems.length}</h2>
                <div className='breakfast-container'>
                    {
                        breakfastItems.map(item => <BreakfastItem key={item.id} item={item}></BreakfastItem>)
                    }
                </div>
            </div>

            <div className='all-lunch'>
                <h2 className='mt-5 text-center'>Our Lunch items : {lunchItems.length}</h2>
                <div id='lunch-section'>
                    <div className="lunch-container">
                        {
                            lunchItems.map(item => <LunchItem key={item.id} item={item}></LunchItem>)
                        }
                    </div>
                </div>
            </div>

            <div className='all-dinner'>
                <h2 className='mt-5 text-center'>Our Dinner items : {dinnerItems.length}</h2>
                <div id='dinner-section'>
                    <div className="dinner-container">
                        {
                            dinnerItems.map(item => <DinnerItem key={item.id} item={item}></DinnerItem>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;