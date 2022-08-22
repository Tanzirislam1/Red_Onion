import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from '../../CustomLink/CustomLink';
import './Foods.css';

const Foods = () => {
    return (
        <div className='container'>
            <h2 className='foods-title text-center'>Our Foods</h2>
            <nav className='foods-nav'>
                <CustomLink className="active-item" to='/home/breakfast'><span className="active-item-name">Breakfast</span></CustomLink>
                <CustomLink className="food-item" to='/home/lunch'>Lunch</CustomLink>
                <CustomLink className="food-item" to='/home/dinner'>Dinner</CustomLink>
            </nav>

            <Outlet></Outlet>
        </div>
    );
};

export default Foods;