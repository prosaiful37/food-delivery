import React from 'react';
import Banner from './Banner/Banner';
import DeliverySteps from './DeliverySteps/DeliverySteps';
import Features from './Features/Features';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <DeliverySteps></DeliverySteps>
        </div>
    );
};

export default Home;