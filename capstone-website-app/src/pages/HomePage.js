import React from "react";
import Hero from '../components/Hero.js';
import Specials from '../components/Specials.js';
import CustomersSay from '../components/CustomersSay.js';
import Chicago from '../components/Chicago.js';

const HomePage = () => {
    return (
        <div className="homePage">
            <Hero/>
            <Specials/>
            <CustomersSay/>
            <Chicago/>
        </div>
    );
};

export default HomePage;

