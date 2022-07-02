import React from 'react';
import Banner from './Banner/Banner';
import DeliverySteps from './DeliverySteps/DeliverySteps';
import Features from './Features/Features';
import SingleSide from './SingleSide/SingleSide';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <DeliverySteps></DeliverySteps>
            <SingleSide></SingleSide>
        </div>
    );
};

export default Home;