import React from 'react';
import FoodSection from './FoodSection/FoodSection';
import HeroSection from './HeroSection/HeroSection';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <FoodSection />
            <WhyChooseUs />
        </div>
    );
};

export default Home;