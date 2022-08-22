import React from 'react';
import DinnerItem from '../../../../Components/Home/menu/Dinner/DinnerItem/DinnerItem';
import './Dinner.css';

const Dinner = () => {
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
    console.log(dinnerItems);

    return (
        <div>
            <h2 className='mt-5 text-center'>Our Dinner items : {dinnerItems.length}</h2>
            <div id='dinner-section'>
                <div className="dinner-container">
                    {
                        dinnerItems.map(item => <DinnerItem key={item.id} item={item}></DinnerItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Dinner;