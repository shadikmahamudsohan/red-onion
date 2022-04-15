import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from '../../../shared/CustomLink/CustomLink';

const FoodSection = () => {

    return (
        <div>
            <div className='text-center my-5'>
                <CustomLink className='py-2 px-3 fw-bold text-decoration-none' to='/home/breakfast'>Breakfast</CustomLink>
                <CustomLink className='py-2 px-3 fw-bold text-decoration-none' to='/home/lunch'>Lunch</CustomLink>
                <CustomLink className='py-2 px-3 fw-bold text-decoration-none' to='/home/dinner'>Dinner</CustomLink>
            </div>
            <Outlet />
            <button className='my-5 d-block mx-auto px-5 btn btn-secondary'>Checkout You Food</button>
        </div>
    );
};

export default FoodSection;