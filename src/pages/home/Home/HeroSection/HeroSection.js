import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <header className='header-container'>
            <div className="details">
                <h1 className='text-center'>Best food waiting for you belly</h1>
                <div className='d-flex align-items-center justify-content-center input-container'>
                    <input type="text" placeholder='Search food items' />
                    <button className='btn btn-danger'>Search</button>
                </div>
            </div>
        </header>
    );
};

export default HeroSection;